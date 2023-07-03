import { LoadingOutlined } from "@ant-design/icons";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuth } from "../../redux/auth";
import { useDispatch } from "react-redux";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(localStorage.authenticated);

  useEffect(() => {
    dispatch(setAuth(false));
    localStorage.removeItem("authenticated");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    setTimeout(() => navigate("/"), 1000);
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
