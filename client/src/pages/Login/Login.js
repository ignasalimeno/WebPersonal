import React, { useState } from "react";
import { Layout, Tabs, Card, Input, Tooltip, Button, Form } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import "./Login.scss";

import LoginFn from "./LoginFn";

export default class Test extends LoginFn {
  render() {
    const { Content } = Layout;
    const { username = "", password = "" } = this.state;

    return (
      <Layout className="login">
        <Content className="login__content">
          <Form>
            <h1>Logo</h1>
            <Form.Item>
              <Card title="Entrar" className="login__content_card">
                <Input
                  name="inputNombreUsuario"
                  //value= {username}
                  placeholder="Ingrese su usuario"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  value={username}
                  onChange={this.changeUsername}
                />
                <p></p>
                <Input.Password
                  name="inputPassword"
                  placeholder="Ingrese su password"
                  //onChange={onChange}
                  value={password}
                  onChange={this.changePassword}
                ></Input.Password>
                <p></p>
                <Button
                  type={Button}
                  className="ant-btn-primary"
                  onClick={() => this.login()}
                >
                  Entrar
                </Button>
              </Card>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    );
  }
}
