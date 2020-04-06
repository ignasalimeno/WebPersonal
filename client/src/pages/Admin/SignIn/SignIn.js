import React, { useState } from "react";
import { Layout, Tabs, Card, Input, Tooltip, Button, Form } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import "./SignIn.scss";

import { signUpAPI } from "../../../api/user";

export default function SignIn() {
  const { Content } = Layout;

  const [inputs, setInputs] = useState({
inputNombreUsuario:"",
inputPassword: ""
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <Form>
          <h1>Logo</h1>
          <Form.Item>
            <Card title="Entrar" className="sign-in__content_card">
              <Input
                name="inputNombreUsuario"
                placeholder="Ingrese su usuario"
                prefix={<UserOutlined className="site-form-item-icon" />}
                onChange={onChange}
              />
              <p></p>
              <Input.Password
                name="inputPassword"
                placeholder="Ingrese su password"
                onChange={onChange}
              ></Input.Password>
              <p></p>
              <Button
                className="ant-btn-primary"
                //onClick={LogIn(inputNombreUsuario, inputPassword)}
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

function LogIn(user, pass) {
  // const result = signUpAPI({
  //     email: inputNombreUsuario,
  //     password: inputPassword
  // })

  // alert("Ingreso de usuario");
  return null;
}
