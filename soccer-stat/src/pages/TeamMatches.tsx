import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spin, Alert, Breadcrumb, Pagination, DatePicker } from "antd";
import { request } from "../api/api";
import type { Match } from "../types/match";
import { mapMatches } from "../utils/mapMatches";
import { MatchesTable } from "../components/MatchesTable";
import { useLocation } from "react-router-dom";

import type { Dayjs } from "dayjs";

interface MatchesResponse {
  matches: Match[];
}

export default function TeamMatches() {
  const { id } = useParams();
  const location = useLocation();

  const [matches, setMatches] = useState<Match[]>([]);
  const teamName = location.state?.name || `Команда ${id}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [dateFrom, setDateFrom] = useState<Dayjs | null>(null);
  const [dateTo, setDateTo] = useState<Dayjs | null>(null);
  const [page, setPage] = useState(1);

  const pageSize = 10;

  async function load(id: string, dates?: [string, string] | null) {
    setLoading(true);
    setError(null);

    try {
      let url = `/teams/${id}/matches`;

      if (dates) {
        url += `?dateFrom=${dates[0]}&dateTo=${dates[1]}`;
      }

      const matchesData: MatchesResponse = await request(url);
      setMatches(matchesData.matches || []);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Ошибка при загрузке данных");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!id) return;

    if (dateFrom && dateTo) {
      load(id, [dateFrom.format("YYYY-MM-DD"), dateTo.format("YYYY-MM-DD")]);
    } else {
      load(id);
    }
  }, [id, dateFrom, dateTo]);

  function handleFromChange(date: Dayjs | null) {
    setDateFrom(date);
    setPage(1);
  }

  function handleToChange(date: Dayjs | null) {
    setDateTo(date);
    setPage(1);
  }

  const tableData = mapMatches(matches);
  const paginated = tableData.slice((page - 1) * pageSize, page * pageSize);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Spin size="large" />
      </div>
    );

  if (error)
    return <Alert type="error" message={error} style={{ marginTop: 16 }} />;

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 90 }}>
        <Breadcrumb.Item>
          <Link to="/teams">Команды</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{teamName}</Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 47,
          }}
        >
          <span>Матчи с</span>

          <DatePicker
            value={dateFrom}
            onChange={handleFromChange}
            style={{ maxWidth: 300, width: "100%" }}
          />

          <span>по</span>

          <DatePicker
            value={dateTo}
            onChange={handleToChange}
            style={{ maxWidth: 300, width: "100%" }}
          />
        </div>

        <MatchesTable data={paginated} />

        <Pagination
          current={page}
          pageSize={pageSize}
          total={tableData.length}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
          style={{
            marginTop: 16,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
}
