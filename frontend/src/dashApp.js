import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Layout } from "antd";
import { history } from "./redux/store";
import routes from "./routes";
import AppLocale from "./languageProvider";
import Boot from "./redux/boot";
import Hoc from './hoc';
import SideMenu from "./customApp/components/sider/SideMenu";
import Header from "./customApp/components/header/Header";
import Footer from "./customApp/components/footer/Footer";

const { Content } = Layout;

const Routes = () => renderRoutes(routes)

const DashApp = () => (
  <Hoc>
    <Layout>
      <Header />
      <Layout>
        <SideMenu />
        <Content>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  </Hoc>
);

Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
