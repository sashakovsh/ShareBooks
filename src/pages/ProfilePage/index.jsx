import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./index.module.scss";

const ProfilePage = () => {
  return (
    <DefaultLayout>
      <div className={"container"}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <div className="profile-card">
          <div className="avatar-container">
            <img src="./img/default-avatar.png" alt="" />
          </div>
          <div className="profile-info-container">
            <div className="about-container">
              <div className="table-row">
                <div className="card-item-first">Имя:</div>
                <div className="card-item-second">Admin</div>
              </div>
              <div className="table-row">
                <div className="card-item-first">E-mail:</div>
                <div className="card-item-second">example@mail.com</div>
              </div>
              <div className="table-row">
                <div className="card-item-first">Дата регистрации:</div>
                <div className="card-item-second">15.05.2023</div>
              </div>
              <div className="table-row">
                <div className="card-item-first">О себе:</div>
                <div className="card-item-second"></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="social-media">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-vk fa-stack-1x fa-inverse" />
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-instagram fa-stack-1x fa-inverse" />
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-github fa-stack-1x fa-inverse" />
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-whatsapp fa-stack-1x fa-inverse" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;
