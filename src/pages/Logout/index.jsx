import { LoadingOutlined } from "@ant-design/icons";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const LogoutPage = () => {
    const navigate = useNavigate();
    console.log(localStorage.authenticated);

    useEffect( () => {
        localStorage.removeItem("authenticated")
        setTimeout(() => navigate("/"), 1000)
    })
    return (
            <DefaultLayout>
                <Row>
                    <Col span={10} offset={7}>
                        <h2>Подождите, выполняется выход</h2>
                        <LoadingOutlined style={{ fontSize: 50 }}/>
                    </Col>
                </Row>
            </DefaultLayout>
    )
}

export default LogoutPage;