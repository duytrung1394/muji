import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";
import { history } from "./redux/store";
import routes from "./routes";
import AppLocale from "./languageProvider";
import Boot from "./redux/boot";
import Hoc from "./hoc";
import Sider from "./customApp/components/shared/sider/sider";
import Header from "./customApp/components/shared/header/header";
import Footer from "./customApp/components/shared/footer/footer";

const { Content } = Layout;

const Routes = () => renderRoutes(routes);

export const DashAppLayout = (props) => (
  <Layout style={{ height: '100%' }}>
    <Header />
    {/* 注: Siderを子要素に持つ場合 hasSider オプションをつけないとSSRの時にサイドバーのレイアウトが崩れてしまう */}
    <Layout hasSider style={{ height: "100%" }}>
      <Sider />
      <Layout>
        <Content id="content" style={{ position: "relative" }}>
          { props.children }
        </Content>
        <Footer />
      </Layout>
    </Layout>
  </Layout>
);


const DashApp = () => (
  <Hoc>
    <BrowserRouter>
      <DashAppLayout>
        <Routes />
      </DashAppLayout>
    </BrowserRouter>
  </Hoc>
);

Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
