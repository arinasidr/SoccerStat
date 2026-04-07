import { Layout, Tabs } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Header } = Layout;

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey = location.pathname.startsWith("/teams") ? "/teams" : "/";

  return (
    <Header style={{ display: "flex", alignItems: "center", backgroundColor: "white" }}>
      <div
        style={{
          color: "white",
          marginRight: 24,
          height: 103,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" alt="logo" style={{height: 55, marginTop: 30, marginLeft: -40
        }}/>
      </div>

      <Tabs
        activeKey={activeKey}
        onChange={(key) => navigate(key)}
        style={{ marginBottom: -34 }}
        items={[
          { key: "/", label: "Лиги" },
          { key: "/teams", label: "Команды" },
        ]}
      />
    </Header>
  );
}
