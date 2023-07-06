import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken, login } from "../../api";
import { setAuth, setAuthToken } from "../../redux/auth";
import DefaultLayout from "../../layouts/DefaultLayout";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await getToken().then(async (token) => {
        console.log(token);
        await login(values, token).then((res) => {
          dispatch(setAuth(true));
          dispatch(setAuthToken(res.access_token))
          localStorage.authenticated = true;
          localStorage.userName = res.user.name;
          localStorage.userId = res.user.id;
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
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 700, paddingLeft: 155 }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш e-mail",
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              },
            ]}
          >
            <Input placeholder="Введите e-mail" />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш пароль",
              },
            ]}
          >
            <Input.Password placeholder="Введите пароль" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            <Button type="link" onClick={redirect}>
              Еще не зарегистрированы?
            </Button>
          </Form.Item>
        </Form>
      </DefaultLayout>
    </>
  );
};

export default AuthPage;
