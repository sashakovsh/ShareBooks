import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <Layout.Footer className={styles.root}>
      <h3>Sharebooks © 2023</h3>
    </Layout.Footer>
  );
};

export default Footer;
