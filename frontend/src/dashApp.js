import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";
import { history } from "./redux/store";
import routes from "./routes";
import AppLocale from "./languageProvider";
import Boot from "./redux/boot";
import Hoc from "./hoc";
import Sider from "./customApp/components/shared/sider/Sider";
import Header from "./customApp/components/shared/header/Header";
import Footer from "./customApp/components/shared/footer/Footer";

const { Content } = Layout;

const Routes = () => renderRoutes(routes);

const DashApp = () => (
  <Hoc>
    <BrowserRouter>
      <Layout style={{ height: "100%" }}>
        <Header />
        <Layout>
          <Sider />
          <Layout>
            <Content id="content" style={{ position: "relative" }}>
              <Routes />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  </Hoc>
);

Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
