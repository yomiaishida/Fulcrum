import { Outlet } from "react-router-dom";
import { App as AntdApp } from "antd";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AntdApp>
      <Header />
      <main className="py-10">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </AntdApp>
  );
};

export default App;
