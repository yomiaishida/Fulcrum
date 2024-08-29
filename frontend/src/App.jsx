import { Outlet } from "react-router-dom";
import { App as AntdApp } from "antd";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <AntdApp>
      <ProtectedRoutes>
        <Outlet />
      </ProtectedRoutes>{" "}
    </AntdApp>
  );
};

export default App;
