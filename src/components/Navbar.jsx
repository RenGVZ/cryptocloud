import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptoicon.png'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container" style={{flexDirection: 'column'}}>
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptocloud</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">

        </Button> */}
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key="one">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key="two">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key="three">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key="four">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar