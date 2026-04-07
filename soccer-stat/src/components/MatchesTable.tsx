import { Table } from "antd"
import type { TableMatch } from "../types/tableMatch"

interface Props {
  data: TableMatch[]
}

export function MatchesTable({ data }: Props) {
  const columns = [
    { title: "Дата", dataIndex: "date" },
    { title: "Время", dataIndex: "time" },
    { title: "Статус", dataIndex: "status" },
    { title: "Команды", dataIndex: "teams" },
    { title: "Счёт", dataIndex: "score", align: "right" as const },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={false}
      style={{ width: "100%", maxWidth: 1220 }}
    />
  )
}