import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  console.log("isAuth", isAuth);
  // const isAuth = () => {
  //   if (localStorage.authenticated) {
  //     return {
  //       key: "/logout",
  //       show: true,
  //     };
  //   } else {
  //     return {
  //       key: "/auth",
  //       show: false,
  //     };
  //   }
  // };

  const redirect = () => {
    navigate(isAuth ? "/logout" : "/auth");
  };

  return (
    <div className={styles.top}>
      <header className={`${styles.header} ${styles.container}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to={"/"}>ShareBooks</Link>
          </div>
          <div className={styles.nav_menu}>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : null)}
                to={"/"}
              >
                Главная
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : null)}
                to={"/about"}
              >
                О проекте
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : null)}
                to={"/catalog"}
              >
                Каталог
              </NavLink>
            </div>
            {/* <div> */}
              {isAuth ? (
                <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : null
                  }
                  to={"/profile"}
                >
                  Профиль
                </NavLink>
                </div>
              ) : null}
            {/* </div> */}
          </div>
          <button
            id="mainEntry"
            className={styles.MainEntryButton}
            onClick={redirect}
          >
            {isAuth ? "Выход" : "Вход"}
          </button>
        </nav>
      </header>
    </div>
    // <Layout.Header className={styles.root}>
    //   <div className={styles.headerInner}>
    //       <h2>
    //         <BookOutlined />
    //         Sharebooks
    //       </h2>
    //     <div className={styles.headerLeft}>

    //       <Menu
    //         className={styles.topMenu}
    //         theme="dark"
    //         mode="horizontal"
    //         defaultSelectedKeys={[location.pathname]}
    //         onSelect={({ key }) => navigate(key)}
    //         items={[
    //           { key: "/main", label: "Главная" },
    //           { key: "/catalog", label: "Каталог" },
    //           isAuth().show ? { key: "/profile", label: "Профиль" } : null,
    //           // { key: "/recommended", label: "Рекомендации" },
    //           // { key: "/favourite", label: "Избранное" },
    //           { key: `${isAuth().key}`, label: `${isAuth().label}` }
    //         ]}
    //       />
    //     </div>
    //   </div>
    // </Layout.Header>
  );
};

export default Header;
