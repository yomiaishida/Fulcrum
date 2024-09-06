import {Space } from "antd";

import 'antd/dist/reset.css';
import '../component/dashboard/dashboard.css';
import DashFooter from "../component/dashboard/DashFooter";
import PageContent from "../component/dashboard/PageContent";
import DashHeader from "../component/dashboard/DashHeader";



const Dashboard = () => {
  return (
    <div className="Dashboard">
  <DashHeader/>
  <Space className="content">
    
    <PageContent></PageContent>
    
  </Space>
  <DashFooter/>
    </div>
  );
};

export default Dashboard;
