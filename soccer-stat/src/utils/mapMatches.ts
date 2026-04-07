import type { Match } from "../types/match";
import { formatScore, formatStatus } from "./formatScore";

export function mapMatches(matches: Match[]) {
  return matches.map((m) => {
    const date = new Date(m.utcDate);

    return {
      id: m.id,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: formatStatus(m.status),
      teams: `${m.homeTeam.name} - ${m.awayTeam.name}`,
      score: formatScore(m.score),
    };
  });
}
