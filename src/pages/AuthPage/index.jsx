import DefaultLayout from "../../layouts/DefaultLayout";
// import axios from "axios";
import { useState } from "react";
import { Form, Input, Checkbox, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";


const AuthPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setisAuthenticated] = useState('false');
    const testUser = {email: "example@mail.com", password: "Admin123"};

    const onFinish = () => {
        if(email === testUser.email && password === testUser.password) {
            setisAuthenticated(true);
            localStorage.setItem("authenticated", true)
            setTimeout(() => navigate("/profile"), 1000)
        } else {
            alert('Пользователь не найден')
        }
    };

    const onFinishFailed = () => {
        console.log('Failed');
    }

    const redirect = () => {
        navigate("/registration")
    }

    return (
        <DefaultLayout>
            { isAuthenticated === true ?
            <Row>
                <Col span={10} offset={7}>
                    <h2>Вход выполнен успешно</h2>
                    <LoadingOutlined style={{ fontSize: 50 }}/>
                </Col>
            </Row>
    
            : 
            <Form
                    name="authForm" 
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 700, margin: 50 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Введите ваш email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваш email',
                        },
                        ]}
                    >
                        <Input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@mail.ru"
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваш пароль',
                        },
                        ]}
                    >
                        <Input.Password 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введите пароль"
                        />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                        <Button type="link" onClick={redirect}>
                            Еще не зарегистрированы?
                        </Button>
                    </Form.Item>
                </Form>
        }
        </DefaultLayout>
    )
};

export default AuthPage;