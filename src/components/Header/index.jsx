import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <BookOutlined />
            Sharebooks
          </h2>
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            onSelect={({ key }) => navigate(key)}
            items={[
              { key: "/", label: "Главная" },
              { key: "/profile", label: "Профиль" },
              { key: "/recommended", label: "Рекомендации" },
              { key: "/favourite", label: "Избранное" },
            ]}
          />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
