export type Match = {
  id: number;
  status: string;
  utcDate: string;
  homeTeam: {
    name: string;
  };
  awayTeam: {
    name: string;
  };
  score: Score
};

export type Score = {
  fullTime: {
    home: number | null
    away: number | null
  }
  extraTime: {
    home: number | null
    away: number | null
  }
  penalties: {
    home: number | null
    away: number | null
  }
}