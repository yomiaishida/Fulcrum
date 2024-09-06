import Typography from 'antd/es/typography/Typography';
import React from 'react'

const DashFooter = () => {
  return (
    <div className='DashFooter'>
      <Typography.Link href="tel:+234908773456">+234908773456</Typography.Link>
      <Typography.Link href="" target={"_blank"} >Privacy Policy</Typography.Link>
      <Typography.Link href="" target={"_blank"}>Terms of Use</Typography.Link>
    </div>
  )
}

export default DashFooter;