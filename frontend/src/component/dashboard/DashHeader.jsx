import { Badge, Space } from 'antd';
import React from 'react'

import {  Typography,  } from 'antd';
import { BellOutlined, MailOutlined, } from '@ant-design/icons';


const DashHeader = () => {
  return (
<div className='DashHeader'>
    <Typography.Title><h2>MY DASHBOARD</h2></Typography.Title>
   <Space className='icon'>
    <Badge count={21} dot>
    <MailOutlined style={{fontSize:24,}}/> 
    </Badge>
    <Badge count={2}>
    <BellOutlined style={{fontSize:24}}/>
    </Badge>
   
    </Space>
    </div>

  )
}

export default DashHeader;