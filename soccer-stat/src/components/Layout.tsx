import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const { Content } = AntLayout;

export default function Layout() {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
        <Header/>
        <Content style={{ padding: '24px 48px'}}>
                <Outlet />
        </Content>
    </AntLayout>
  )
}