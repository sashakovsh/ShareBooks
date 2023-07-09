import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken, login } from "../../api";
import { setAuth, setAuthToken } from "../../redux/auth";
import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import { useState } from "react";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
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
        await login(values, token).then((res) => {
          dispatch(setAuth(true));
          dispatch(setAuthToken(res.access_token))
          localStorage.authenticated = true;
          localStorage.userName = res.user.name;
          localStorage.userId = res.user.id;
          localStorage.created_at = res.user.created_at;
        });
      });

      notification.success({
        message: "Успешно!",
        description: "Переходим на главную",
        duration: 2,
      });

      navigate("/");
    } catch (err) {
      console.warn("LoginForm", err.message);

      notification.error({
        message: "Ошибка!",
        description: "Проверьте данные",
        duration: 2,
      });
    }
  };

  const redirect = () => {
    navigate("/registration");
  };

  return (
    <>
      <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.top}>
            <main className={`${styles.content} ${styles.container}`}>
                <div className={styles.authorization_box}>
                    <div className={styles.authorization_left}>
                        <p className={styles.authorization_text}><span>С возвращением!</span></p>
                        {/* <p className={styles.authorization_passRecovery}><span>Забыли пароль? </span>
                            <Link>Восстановить</Link>
                        </p> */}
                        <img src="/auth_img/Banner.svg" alt=""/>
                    </div>
                    <div className={styles.authorization_right}>
                        <form 
                          className={styles.authorization_form}
                          onSubmit={(e) => onSubmit(e)}>
                            <div className={styles.authorization_Email}>
                                <label htmlFor="email">Введите E-mail:</label>
                                <input value={userInfo.email} onChange={(e) => handleChange(e)}
                                  type="email" id="email" name="email" required/>
                            </div>
                            <div className={styles.authorization_password}>
                                <label htmlFor="password">Введите пароль:</label>
                                <input value={userInfo.password} onChange={(e) => handleChange(e)}
                                  type="password" name="password" id="password" required/>
                            </div>
                            <div className={styles['authorization_remember-me']}>
                                <input type="checkbox" name="remember" id="remember"/>
                                <span className={styles.checkmark}></span>
                                <label htmlFor="remember">Запомнить меня</label>
                            </div>
                            <button className={styles.authorization_button} type="submit" value="enter">Войти</button>
                        </form>
                        <div className={styles.registration}>
                          <p>Ещё нет аккаунта?</p>
                          <button 
                            className={styles.registration_button}
                            onClick={redirect}
                          >
                            Зарегистрироваться
                          </button>
                        </div>
                        <img 
                        src={localStorage.authenticated
                          ? "/main_img/castle.svg"
                          : "/main_img/planet.svg"}  
                        alt=""/>
                    </div>
                </div>
            </main>
        </div>
      </div>
        {/* // <Form
        //   name="login"
        //   labelCol={{ span: 8 }}
        //   wrapperCol={{ span: 16 }}
        //   style={{ width: 700, paddingLeft: 155 }}
        //   initialValues={{ remember: true }}
        //   onFinish={onSubmit}
        // >
        //   <Form.Item
        //     label="E-mail"
        //     name="email"
        //     rules={[
        //       {
        //         required: true,
        //         message: "Пожалуйста, введите ваш e-mail",
        //         pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        //       },
        //     ]}
        //   >
        //     <Input placeholder="Введите e-mail" />
        //   </Form.Item>

        //   <Form.Item
        //     label="Пароль"
        //     name="password"
        //     rules={[
        //       {
        //         required: true,
        //         message: "Пожалуйста, введите ваш пароль",
        //       },
        //     ]}
        //   >
        //     <Input.Password placeholder="Введите пароль" />
        //   </Form.Item>

        //   <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        //     <Button type="primary" htmlType="submit">
        //       Войти
        //     </Button>
        //     <Button type="link" onClick={redirect}>
        //       Еще не зарегистрированы?
        //     </Button>
        //   </Form.Item>
        // </Form> */}
      </DefaultLayout>
    </>
  );
};

export default AuthPage;
