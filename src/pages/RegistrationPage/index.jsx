import DefaultLayout from "../../layouts/DefaultLayout";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const REGISTER_URL = "/registration";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');

    const onFinish = async () => {
        axios.post(
            REGISTER_URL, 
            JSON.stringify({username, email, password}), 
            { 
                headers: { "Content-Type": "application/json" }, withCredentials: true
            }).then(console.log('SUCCSES'))
              .catch(
                (err) => {
                    setErrMsg(err)
                    console.log(errMsg);
                })
    };
    const redirect = () => {
        navigate("/auth");
    }


    return(
        <DefaultLayout>
            <Form
                    name="registrationForm" 
                    labelCol={{ span: 8 }}
                    style={{ maxWidth: 700, marginTop: 50 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Введите вашe имя"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваше имя',
                        },
                        ]}
                    >
                        <Input 
                            value={username} 
                            placeholder="Введите имя"
                            onChange={ (e) => setUsername(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Введите вашу почту"
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
                            placeholder="Введите email"
                            onChange={ (e) => setEmail(e.target.value) }
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
                            placeholder="Введите пароль"
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Зарегистрироваться
                        </Button>
                        <Button type="link" onClick={redirect}>Назад</Button>
                
                    </Form.Item>
                </Form>
        </DefaultLayout>
    )
};

export default RegistrationPage;