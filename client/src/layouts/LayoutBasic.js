import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sider</h2>
      <Layout>
              <Content>
            <LoadRoutes routes={routes} />
        </Content>
        <Footer>pie del basic</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes(props) {
  const { routes } = props;
console.log(routes);

  return routes.map((route, index) => (
   <Route
  
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
