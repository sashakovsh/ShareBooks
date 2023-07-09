import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  console.log("isAuth", isAuth);

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
  );
};

export default Header;
