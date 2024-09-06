
import { DollarOutlined, FileImageOutlined, OrderedListOutlined, ProductOutlined, ShoppingCartOutlined, ShoppingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import {  Card, Space, Statistic, Table, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getOrders, getRevenue } from '../../api/fetch';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PageContent = () => {
  
  return (
    <div>
      <Space size={20} direction='vertical'>
    <Typography.Title level={4} className='page'>Dashboard</Typography.Title>
    <Space direction='horizontal' className='cards'>

      <DashboardCard icon={<ProductOutlined
       style={{color:"Red",
        backgroundColor :"rgba(255,0,0,0.5)",
         borderRadius: 20,
        fontSize:24,
      padding:0}}/>}
        title={"Products"}value={3455}/>

      <DashboardCard icon={<UserOutlined style={{color:"green",
        backgroundColor :"rgba(0,255,0,0.5)",
         borderRadius: 20,
        fontSize:24,
      padding:0}}
      />}title={"Customers"}value={3455}/>

      <DashboardCard  icon={<OrderedListOutlined style={{color:"blue",
        backgroundColor :"rgba(0,0,255,0.5)",
         borderRadius: 20,
        fontSize:24,
      padding:0}}
      />}title={"Shipped Order"}value={345}/>

      <DashboardCard  icon={<ShoppingOutlined style={{color:"purple",
        backgroundColor :"rgba(0,0,0.5,255)",
         borderRadius: 20,
        fontSize:24,
      padding:0}}
      />}title={"Pending Order"}value={355}/>

      <DashboardCard  icon={<DollarOutlined style={{color:"blue",
        backgroundColor :"rgba(0,0,255,0.5)",
         borderRadius: 20,
        fontSize:24,
      padding:0}}
      />}title={"Revenue"}value={3455}/>
      
      
    </Space>
    <div className='Orders'>
      <RecentOrders/> <Space><div className='chart'><Dashchart/></div></Space>
      
    </div   >
    </Space>
    </div>

  );

}
const DashboardCard=({title,value, icon})=>{
 return( <Card >
        <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value}/>
        </Space>
      </Card>
 );
}
const RecentOrders=() =>{
 const [dataSource, setDataSource]= useState([]);
 const [loading, setLoading] =useState(false);

  useEffect(()=>{
    setLoading(true)
    getOrders().then(res=>{
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    })
  }, {})
  return (
    <>
    <Typography.Text>Recent Orders</Typography.Text>
    <Table columns={[
      {
title:"Title",
dataIndex: "title",
    },
    {
      title:"Quantity",
      dataIndex: "quantity",
          },
          {
            title:"Price",
            dataIndex: "discountPercentage",
                },
    ]}
    loading={loading}
    dataSource={dataSource}
    >

    </Table>
    </>
  );
  

}

const Dashchart=()=>{
  const [ revenueData, setRevenueData] =useState({
    labels: [],
    datasets: []
})
  useEffect(() =>{
    getRevenue().then(res=>{
      const labels =res.carts.map((cart)=>{
     return  ` User-${cart.userId}`;
      });
    const data = res.carts.map((cart)=>{
      return cart.discountedTotal;
    });
    const dataSource={
      labels,
      datasets:[
        {
          label: 'Revenue',
          data: data,
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
        
      ],
    }
    setRevenueData(dataSource)
    });
  }, {})
  
  const options = {
   responsive: true,
   plugins: {
     legend: {
       position: 'bottom',
     },
     title: {
       display: true,
       text: 'Order Revenue',
     },
   },
 };


 const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


return <Card style={{width:800, height:50}}><Bar options={options} data={revenueData} /></Card>

}




export default PageContent;