import React, { Component } from "react";
import { Layout } from "antd";
import { SiteMap } from "./siteMap";
import { Navigation } from "./navigation";

const Footer = () => {
  return (
    <Layout.Footer>
      <SiteMap />
      <Navigation />
    </Layout.Footer>
  );
};

export default Footer;
