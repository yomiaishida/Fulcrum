import { Outlet } from "react-router-dom";
import { App as AntdApp } from "antd";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <AntdApp>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
    </AntdApp>
  );
};

export default App;
