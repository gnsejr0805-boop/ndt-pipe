import { useState } from 'react'
import { normalizeNps, normalizeSchedule } from './normalize'
import {
  findSourceCheckedPipeRecord,
  type PipeRecord,
  type PipeTable,
} from './pipeData'
import './App.css'

const TABLES: readonly PipeTable[] = ['TABLE_1', 'TABLE_2']

function findMatchingRecords(nps: string, schedule: string): PipeRecord[] {
  return TABLES.flatMap((table) => {
    const record = findSourceCheckedPipeRecord(table, nps, schedule)
    return record ? [record] : []
  })
}

function hasConflictingValues(records: PipeRecord[]) {
  if (records.length < 2) return false

  const first = records[0]

  return records.some(
    (record) =>
      record.odMm !== first.odMm ||
      record.thicknessMm !== first.thicknessMm ||
      record.thicknessIn !== first.thicknessIn,
  )
}

function App() {
  const [nps, setNps] = useState('')
  const [schedule, setSchedule] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<PipeRecord | null>(null)

  const normalizedNps = normalizeNps(nps)
  const normalizedSchedule = normalizeSchedule(schedule)

  function handleLookup() {
    setMessage('')
    setResult(null)

    if (!nps.trim() || !schedule.trim()) {
      setMessage('호칭경과 스케줄을 모두 입력하세요.')
      return
    }

    if (!normalizedNps) {
      setMessage('호칭경 입력값을 확인하세요. 예: 2½, 2.5, 2 1/2')
      return
    }

    if (!normalizedSchedule) {
      setMessage('스케줄 입력값을 확인하세요. 예: SCH40, SCH40S, S40, 40S, STD')
      return
    }

    const matches = findMatchingRecords(normalizedNps, normalizedSchedule)

    if (matches.length === 0) {
      setMessage(
        `NPS ${normalizedNps} / ${normalizedSchedule} 조합의 검수 완료 데이터가 아직 등록되지 않았습니다. t값 출력은 차단됩니다.`,
      )
      return
    }

    if (hasConflictingValues(matches)) {
      setMessage(
        `NPS ${normalizedNps} / ${normalizedSchedule} 조합이 둘 이상의 원본 표에서 서로 다른 값으로 발견됐습니다. 확인 전까지 t값 출력은 차단됩니다.`,
      )
      return
    }

    setResult(matches[0])
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">NDT FIELD TOOL</p>
        <h1>파이프 두께 조회</h1>
        <p>호칭경과 스케줄을 입력하면 검수 완료된 t값만 조회합니다.</p>
      </header>

      <section className="lookup-card">
        <label className="field-group">
          <span className="field-label">호칭경 (NPS)</span>
          <input
            value={nps}
            onChange={(event) => setNps(event.target.value)}
            placeholder="예: 2½ 또는 2.5 또는 2 1/2"
          />
        </label>

        <label className="field-group">
          <span className="field-label">스케줄 (Schedule)</span>
          <input
            value={schedule}
            onChange={(event) => setSchedule(event.target.value)}
            placeholder="예: SCH40, SCH40S, S40, 40S, STD"
          />
        </label>

        <button type="button" className="lookup-button" onClick={handleLookup}>
          t값 조회
        </button>
      </section>

      <section className="preview-card">
        <p className="eyebrow">입력 인식 미리보기</p>

        <div className="preview-row">
          <span>호칭경 해석</span>
          <strong>{normalizedNps || '형식 확인 필요'}</strong>
        </div>

        <div className="preview-row">
          <span>스케줄 해석</span>
          <strong>{normalizedSchedule || '형식 확인 필요'}</strong>
        </div>
      </section>

      {result && (
        <section className="preview-card">
          <p className="eyebrow">검수 완료 결과</p>

          <div className="preview-row">
            <span>호칭경</span>
            <strong>NPS {result.nps}</strong>
          </div>

          <div className="preview-row">
            <span>스케줄</span>
            <strong>{result.schedule}</strong>
          </div>

          <div className="preview-row">
            <span>외경 (OD)</span>
            <strong>{result.odMm} mm</strong>
          </div>

          <div className="preview-row">
            <span>두께 (t)</span>
            <strong>{result.thicknessMm} mm</strong>
          </div>

          <div className="preview-row">
            <span>두께 (inch)</span>
            <strong>{result.thicknessIn} in</strong>
          </div>
        </section>
      )}

      <section className="safety-card">
        <strong>데이터 안전 상태</strong>
        <p>
          등록되지 않은 조합, 또는 원본 표끼리 값이 충돌하는 조합은 결과를 만들지 않습니다.
        </p>
      </section>

      {message && <p className="message">{message}</p>}
    </main>
  )
}

export default App