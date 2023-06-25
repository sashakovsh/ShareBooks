import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import RecsPage from "../RecsPage";
import FavouritePage from "../FavouritePage";

const ProfilePage = () => {
  const name = localStorage.userName;

  const showFavs = () => {
    const favs = document.getElementById('favs');
    const recs = document.getElementById('recs');
    if(recs.classList.contains(styles.hidden)) {
      favs.classList.toggle(styles.hidden);
    } else {
      recs.classList.toggle(styles.hidden);
      favs.classList.toggle(styles.hidden);
    }
  }

  const showRecs = () => {
    const favs = document.getElementById('favs');
    const recs = document.getElementById('recs');
    if(favs.classList.contains(styles.hidden)) {
      recs.classList.toggle(styles.hidden);
    } else {
      favs.classList.toggle(styles.hidden);
      recs.classList.toggle(styles.hidden);
    }
  }

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
      <div className={"container"}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <div className="profile-card">
          <div className="avatar-container">
            <img src="./profile_img/avatar_default.svg" alt="" />
          </div>
          <div className="profile-info-container">
            <div className="about-container">
              <div className="table-row">
                <div className="card-item-first">Имя:</div>
                <div className="card-item-second">{name}</div>
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
          <div className={styles.btnBlock}>
            <button onClick={() => showFavs()}>Посмотреть избранное</button>
            <button onClick={() => showRecs()}>Посмотреть рекомендации</button>
          </div>
          <div id='favs' className={`${styles.favs} ${styles.hidden}`}>
            <FavouritePage/>
          </div>
          <div id='recs' className={`${styles.recs} ${styles.hidden}`}>
            <RecsPage/>
          </div>
        </div>
      </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;
