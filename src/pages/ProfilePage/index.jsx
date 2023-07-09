import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import RecsPage from "../RecsPage";
import FavouritePage from "../FavouritePage";
import { useState } from "react";
import SearchForm from "../../components/Search";

const ProfilePage = () => {
  const name = localStorage.userName;
  const date = localStorage.created_at.split('T')[0];
  const [showedFavs, setShowedFavs] = useState(false);
  const [showedRecs, setShowedRecs] = useState(false);

  const showFavs = () => {
    if(!showedFavs) {
      setShowedFavs(true);
      setShowedRecs(false);
    } else {
      setShowedFavs(false);
    }
  };

  const showRecs = () => {
    if(!showedRecs) {
      setShowedRecs(true);
      setShowedFavs(false);
    } else {
      setShowedRecs(false);
    }
  };

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.top}>
        <div className={styles['menu_box--color']}>
            <div className={`${styles.menu_box} ${styles.container}`}>
              <SearchForm/>
            </div>
        </div>
        <main className={styles.content}>
          <div className={styles['profile_box--color']}>
            <div className={`${styles.profile_item} ${styles.container}`}>
              <div className={styles.profile_info}>
                <div className={styles.profile_info_userName}>
                  {name}
                  <p>В сообществе с {date}</p>
                </div>
                <div className={styles.profile_info_picture}>
                  <img src="./profile_img/avatar_default.svg" alt="profile image"/>
                </div>
                <div className={styles.profile_info_description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum 
                  dicta maiores alias, dolorum, dolorem ab explicabo ipsam.
                </div>
              </div>
              <div className={styles.profile_buttons}>
                <button 
                  className={showedFavs 
                    ? `${styles.profile_buttons_favorits} ${styles.active}`
                    : styles.profile_buttons_favorits}
                  onClick={() => showFavs()}>
                    Посмотреть избранное
                </button>
                <button 
                  className={showedRecs
                    ? `${styles.profile_buttons_recomends} ${styles.active}`
                    : styles.profile_buttons_recomends}
                  onClick={() => showRecs()}>
                    Посмотреть рекомендации
                </button>
              </div>
            </div>
          </div>
          <div id='favs' className={`${styles.favs}`}>
                {showedFavs ? <FavouritePage/> : null}
              </div>
              <div id='recs' className={`${styles.recs}`}>
                {showedRecs ? <RecsPage/> : null}
          </div>
        </main>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;
