import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getToken, register } from "../../api";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useDispatch } from "react-redux";
import { setAuth, setAuthToken } from "../../redux/auth";
import styles from "./index.module.scss";
import { useState } from "react";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const nextFormState = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };
    setUserInfo(nextFormState);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = userInfo;
    try {
      await getToken().then(async (token) => {
        console.log(token);
        await register(values, token).then( (resp) => {
          dispatch(setAuth(true));
          dispatch(setAuthToken(resp.access_token));
          localStorage.authenticated = true;
          localStorage.userName = resp.user.name;
          localStorage.userId = resp.user.id;
          localStorage.created_at = resp.user.created_at;
        });
      });

      notification.success({
        message: "Успешно!",
        description: "Переходим на главную",
        duration: 2,
      });

      localStorage.authenticated = true;

      navigate("/");
    } catch (err) {
      console.warn("RegistrationForm", err.message);

      notification.error({
        message: "Ошибка!",
        description: "Проверьте данные",
        duration: 2,
      });
    }
  };

  return (
    <>
      <DefaultLayout>
          <main className={`${styles.content} ${styles.container}`}>
            <div className={styles.registration_box}>
              <img className={styles.registration_ellipse1} src="./registration_img/Ellipse1.png" alt=""/>
              <img className={styles.registration_ellipse2} src="./registration_img/Ellipse2.png" alt=""/>
              <img className={styles.registration_ellipse3} src="./registration_img/Ellipse3.png" alt=""/>
              <img className={styles.registration_planet} 
                src={localStorage.authenticated
                  ? "./main_img/castle.svg" 
                  : "./main_img/planet.svg"}
                alt=""/>

              <div className={styles.registration_left}>
                <p className={styles.registration_text}>
                  <span>Создать аккаунт</span>
                </p>
                <form 
                className={styles.registration_form}
                onSubmit={(e) => onSubmit(e)}>
                  <div className={styles.registration_userName}>
                    <label htmlFor="email"> Имя (будет отображаться в профиле)</label>
                    <input value={userInfo.name} onChange={(e) => handleChange(e)}
                      id="name" name="name" required/>
                  </div>
                  <div className={styles.registration_Email}>
                    <label htmlFor="email">E-mail:</label>
                    <input value={userInfo.email} onChange={(e) => handleChange(e)}
                      type="email" id="email" name="email" required/>
                  </div>
                  <div className={styles.registration_password}>
                    <label htmlFor="password">Пароль (должен содержать не менее 8 символов):</label>
                    <input value={userInfo.password} onChange={(e) => handleChange(e)}
                      type="password" name="password" id="password" required/>
                  </div>
                  <div className={styles['registration_remember-me']}>
                    <input type="checkbox" name="remember" id="remember"/>
                    <span className={styles.checkmark}></span>
                    <label htmlFor="remember">
                      Я принимаю условия 
                      <Link>Пользовательского соглашения</Link>
                    </label>
                  </div>
                  <div className={styles.registration}>
                    <button type="submit" className={styles.registration_button_submit}>
                        Зарегистрироваться
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.registration_right}>
                <p className={styles.registration_authorization}>
                  <span>Уже есть аккаунт?</span>
                  <Link to={'/auth'}>Войти</Link>
                </p>
              </div>
            </div>
          </main>
      </DefaultLayout>
    </>
  );
};

export default RegistrationPage;
