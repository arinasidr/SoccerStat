import { useEffect, useState } from "react";
import { Spin, Alert, Pagination, Input } from "antd";
import { request } from "../api/api";
import CompetitionList from "../components/CompetitionList";
import type { Competition } from "../types/competition";

export default function Competitions() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 16;

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await request("/competitions");
      setCompetitions(data.competitions || []);
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
    load();
  }, []);

  const filtered = competitions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

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
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
    }}
  >
    <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
      <Input.Search
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }}
        style={{ width: "100%", maxWidth: 1150 }}
      />
    </div>

    {!loading && filtered.length === 0 && (
      <Alert message="Ничего не найдено" type="info" />
    )}

    <CompetitionList competitions={paginated} />

    <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
      <Pagination
        current={page}
        pageSize={pageSize}
        total={filtered.length}
        onChange={(p) => setPage(p)}
      />
    </div>
  </div>
)
}
