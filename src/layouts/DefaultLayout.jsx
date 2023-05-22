import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConfigProvider } from "antd";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#283D3B",
          }
        }}
      >
        <Header />
        {children}
        <Footer />
      </ConfigProvider>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default DefaultLayout;
