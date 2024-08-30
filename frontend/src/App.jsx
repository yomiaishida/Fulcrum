import { Outlet } from "react-router-dom";
import { App as AntdApp } from "antd";
import ProtectedRoutes from "./ProtectedRoutes";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <AntdApp>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </AntdApp>
  );
};

export default App;
