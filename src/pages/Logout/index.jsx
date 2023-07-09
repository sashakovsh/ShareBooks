import { LoadingOutlined } from "@ant-design/icons";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuth } from "../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { getToken, logout } from "../../api";

const LogoutPage = () => {
  const access_token = useSelector( (state) => state.auth.authToken );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutAsync = async () => {  
    try {
      await getToken().then( async (token) => {
        await logout(token.csrfToken, access_token);
      })
      dispatch(setAuth(false));
      localStorage.removeItem('authenticated');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      localStorage.removeItem('created_at');
      // вот насчет истории ниже я не уверен...
      document.cookie.split(';').forEach(function(c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
      });
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  
  useEffect(() => {
    logoutAsync();
  });

  return (
    <DefaultLayout>
      <Row>
        <Col span={10} offset={7}>
          <h2>Подождите, выполняется выход</h2>
          <LoadingOutlined style={{ fontSize: 50, margin: 100 }} />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default LogoutPage;
