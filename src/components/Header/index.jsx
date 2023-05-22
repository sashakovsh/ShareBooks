import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = () => {
    if (localStorage.authenticated) {
      return {
        key: "/logout",
        label: "Выйти",
        show: true
      }
    } else {
        return {
          key: "/auth",
          label: "Войти/Зарегистрироваться",
          show: false
        }
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
          <h2>
            <BookOutlined />
            Sharebooks
          </h2>
        <div className={styles.headerLeft}>
          
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            onSelect={({ key }) => navigate(key)}
            items={[
              { key: "/", label: "Главная" },
              isAuth().show ? { key: "/profile", label: "Профиль" } : null,
              { key: "/recommended", label: "Рекомендации" },
              { key: "/favourite", label: "Избранное" },
              { key: `${isAuth().key}`, label: `${isAuth().label}` }
            ]}
          />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
