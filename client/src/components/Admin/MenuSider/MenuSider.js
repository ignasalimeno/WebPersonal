import React from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined, CopyOutlined 
} from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
    console.log(props);
    
  const { Sider } = Layout;
  const {Item} = Menu;
  const { menuCollapsed } = props;

  return (
    <Sider className="admin-sider"  collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Item key="1" >
              <Link to={"/admin"} >
              <HomeOutlined />
              <span className="nav-text">Home</span>
              </Link>
          </Item>
          <Item key="2">
              <Link to={"/admin/menu-web"}>
              <CopyOutlined />
              <span className="nac-text">Menu web</span>
              </Link>
          </Item>
      </Menu>
    </Sider>
  );
}
