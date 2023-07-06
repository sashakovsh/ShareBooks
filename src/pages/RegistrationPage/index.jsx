import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { getToken, register } from "../../api";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useDispatch } from "react-redux";
import { setAuth, setAuthToken } from "../../redux/auth";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await getToken().then(async (token) => {
        console.log(token);
        await register(values, token).then( (resp) => {
          dispatch(setAuth(true));
          dispatch(setAuthToken(resp.access_token));
          localStorage.userName = resp.user.name;
          localStorage.userId = resp.user.id;
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

  const redirect = () => {
    navigate("/auth");
  };
  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <DefaultLayout>
        {localStorage.authenticated ? (
          redirectToProfile()
        ) : (
          <Form
            name="register"
            labelCol={{ span: 8 }}
            style={{ width: 700, paddingLeft: 155 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item
              label="Введите вашe имя"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите ваше имя",
                },
              ]}
            >
              <Input placeholder="Введите имя" />
            </Form.Item>

            <Form.Item
              label="Введите вашу почту"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите ваш email",
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                },
              ]}
            >
              <Input placeholder="Введите email" />
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
                Зарегистрироваться
              </Button>
              <Button type="link" onClick={redirect}>
                Назад
              </Button>
            </Form.Item>
          </Form>
        )}
      </DefaultLayout>
    </>
  );
};

export default RegistrationPage;
