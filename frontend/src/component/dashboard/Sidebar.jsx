/*import React from 'react'
import {Menu} from "antd"
import { AppstoreAddOutlined, MoneyCollectOutlined, ProductOutlined, TeamOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='Sidebar'>
      <h3>Menu</h3>
      <Menu 
      onClick={(item)=>{
        //item.key
        navigate(item.key);
      }}
      items={[{
       label: "Dashboard",
       icon: <AppstoreAddOutlined/>,
       key: "/",

      },
      {
        label: "Products",
        icon: <ProductOutlined/>,
        key: "/Products",
        
       },
       {
        label: "Hot Sales",
        icon: <MoneyCollectOutlined/>,
        key: "/Hot Sales",
        
       },
       {
        label: "Vendors",
        icon: <TeamOutlined />,
        key: "/Vendors",
        
       }
       ]}>
      
    </Menu>
    </div>
  )
}


 


export default Sidebar;*/
