import React, { Component } from "react";
import { Layout } from "antd";
import { SiteMap } from "./SiteMap";
import { Navigation } from "./Navigation";

const Footer = () => {
  return (
    <Layout.Footer>
      <SiteMap />
      <Navigation />
    </Layout.Footer>
  );
};

export default Footer;
