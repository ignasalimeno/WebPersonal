import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sider</h2>
      <Layout>
        <Header>Encabezado</Header>

        <Content>
          <LoadRouters routes={routes} />
        </Content>

        <Footer>Pie</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters(props) {
  const { routes } = props;

  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
