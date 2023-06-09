import DefaultLayout from "../../layouts/DefaultLayout";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBlock from "../../components/ErrorBlock";
import axios from "axios";


const RegistrationPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setisError] = useState(false);
    const [errText, seterrText] = useState('');

    const onFinish = async () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setisError(true);
            seterrText('Некорректный формат электронной почты.');
            return
        }
        await axios.get('http://localhost/api/sanctum/csrf-cookie')
            .then( (resp) => {
                console.log(resp);
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
                    if(resp.data.status === 'success') {
                        localStorage.authenticated = true
                    }
                })
                .catch( (err) => {
                    setisError(true);
                    seterrText(err.message)
                })
            }).catch( (err) => {
                setisError(true);
                seterrText(err.message)
            })
    };

    const redirect = () => {
        navigate("/auth");
    }
    const redirectToProfile = () => {
        navigate("/profile")
    }

    const onFinishFailed = () => {
        console.log('Failed');
        setisError(true);
        seterrText('Все поля должны быть заполнены.');

    }

    const handleClick = () => {
        setisError(false);
    }

    const handleCancel = () => {
        setisError(false);
    }

    return(
        <>
        {isError === true ?
            <ErrorBlock 
                is_error={isError} 
                text={errText} 
                onClick={handleClick} 
                onCancel={handleCancel}/>
            : null
        }
        <DefaultLayout>
            {localStorage.authenticated ? redirectToProfile() :
            <Form
                    name="registrationForm" 
                    labelCol={{ span: 8 }}
                    style={{ width: 700, paddingLeft: 155}}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
        </>
    )
};

export default RegistrationPage;