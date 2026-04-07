import { Row, Col } from "antd";
import CompetitionCard from "./CompetitionCard";
import type { Competition } from "../types/competition";

export default function CompetitionList({ competitions }: { competitions: Competition[]}) {
  return (
    <Row
      gutter={[16, 16]}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {competitions.map((c: Competition) => (
        <Col key={c.id} xs={24} sm={12} md={8} lg={6}>
          <CompetitionCard competition={c} />
        </Col>
      ))}
    </Row>
  );
}
