import DefaultLayout from "../../layouts/DefaultLayout";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const RegistrationPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = async () => {
        await axios.get('http://localhost/api/sanctum/csrf-cookie').
            then( (resp) => {
                axios.post('http://localhost/api/register', {
                    'name': username,
                    'email': email,
                    'password': password
                },
                {withCredentials: true},
                {headers: 
                    {
                        'X-CSRF-TOKEN': resp.data
                    }
                }
                ).then( resp => {
                    if(resp.data.status === 'succsess') {
                        localStorage.authenticated = true
                    }
                })
            }).catch( (err) => console.log(err))
    };

    const redirect = () => {
        navigate("/auth");
    }
    const redirectToProfile = () => {
        navigate("/profile")
    }


    return(
        <DefaultLayout>
            {localStorage.authenticated ? redirectToProfile() :
            <Form
                    name="registrationForm" 
                    labelCol={{ span: 8 }}
                    style={{ width: 700, paddingLeft: 155}}
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
            }
        </DefaultLayout>
    )
};

export default RegistrationPage;