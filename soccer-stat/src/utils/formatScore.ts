import type { Score } from "../types/match";

export function formatScore(score: Score) {
    if (!score) return "-"
    const ft = score.fullTime
    const et = score.extraTime
    const p = score.penalties

    let result = ""

    if (ft?.home != null && ft?.away != null) {
        result += `${ft?.home}:${ft?.away}`
    }

    if (et?.home != null && et?.away != null) {
        result += ` (${et?.home}:${et?.away})`
    }

    if (p?.home != null && p?.away != null) {
        result += ` (${p?.home}:${p?.away})`
    }

    return result || "-"

}

export function formatStatus(status: string): string {
  const map: Record<string, string> = {
    SCHEDULED: "Запланирован",
    LIVE: "В прямом эфире",
    IN_PLAY: "В игре",
    PAUSED: "Пауза",
    FINISHED: "Завершен",
    POSTPONED: "Отложен",
    CANCELED: "Отменен",
    SUSPENDED: "Приостановлен"
  }

  return map[status] || status
}