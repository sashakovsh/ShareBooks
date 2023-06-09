import DefaultLayout from "../../layouts/DefaultLayout";
import axios from "axios";
import { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
// import { LoadingOutlined } from "@ant-design/icons";
import ErrorBlock from "../../components/ErrorBlock";



const AuthPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMsg, setErrorMsg] = useState('');
    // const [isAuthenticated, setisAuthenticated] = useState('false');
    const [isError, setisError] = useState(false);
    const [errText, seterrText] = useState('');

//     const onFinish = () => {
//         const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
//         if (!emailRegex.test(email)) {
//             setisError(true);
//             seterrText('Некорректный формат электронной почты.');
//             return
//         }
//         if(email === testUser.email && password === testUser.password) {
//             setisAuthenticated(true);
//             localStorage.setItem("authenticated", true)
//             setTimeout(() => navigate("/profile"), 1000)
//         } else {
//             setisError(true);
//             seterrText('Пользователь не найден, проверьте правильность введённых данных.');
//         }
//     };
   const onFinish = async () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setisError(true);
            seterrText('Некорректный формат электронной почты.');
            return
        }
        await axios.get('http://localhost/api/sanctum/csrf-cookie').
            then( (resp) => {
                axios.post('http://localhost/api/login', {
                    'email': email,
                    'password': password
                },
                {withCredentials: true},
                {headers: {
                    'X-CSRF-TOKEN': resp.data
                }}
                )
                .then( (resp) => {
                    if(resp.data.status === true) {
                        localStorage.authenticated = true;
                        localStorage.userName = resp.data.user.name;
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
    } 

    const onFinishFailed = () => {
        console.log('Failed');
        setisError(true);
        seterrText('Все поля должны быть заполнены.');

    }

    const redirect = () => {
        navigate("/registration")
    }

    const handleClick = () => {
        setisError(false);
    }

    const handleCancel = () => {
        setisError(false);
    }

    return (
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
         
            <Form
                    name="authForm" 
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: 700, paddingLeft: 155 }}
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
                
        </DefaultLayout>
        </>
    )
};

export default AuthPage;