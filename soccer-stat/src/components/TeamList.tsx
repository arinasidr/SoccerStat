import { Row, Col } from "antd";
import TeamsCard from "./TeamsCard";
import type { Team } from "../types/teams";

export default function TeamList({ teams }: { teams: Team[] }) {
  return (
    <Row
      gutter={[16, 16]}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {teams.map((c: Team) => (
        <Col key={c.id} xs={24} sm={12} md={8} lg={6}>
          <TeamsCard team={c} />
        </Col>
      ))}
    </Row>
  );
}
