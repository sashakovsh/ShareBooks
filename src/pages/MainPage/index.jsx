import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const redirect = () => {
    if(localStorage.authenticated){
      navigate("/recommended");
    } else {
      navigate("/registration");
    }
  };

  const redirectToCatalog = () => {
    navigate("/catalog");
  }

  return (
      <DefaultLayout>
        <>
        <div className={styles.wrapper}>
          <main className={`${styles.content} ${styles.container}`}>
            <div className={styles.content_left}>
              <h1>
                Открывай новые миры вместе с ShareBooks
              </h1>
              <p className={styles.main_desc}>
                {localStorage.authenticated 
                  ? `Добро пожаловать, ${localStorage.userName}!
                  Посмотри список рекомендаций, который мы составили для тебя.` 
                  : 'Присоединяйся к сообществу, отмечай любимые произведения и исследуй список рекомендаций.'
                }
              </p>
              <div className={styles.content_buttons}>
                <button 
                  className={`${styles.content_button} ${styles["button--entry"]}`}
                  onClick={redirect}>
                    {localStorage.authenticated 
                    ? 'Рекомендации' 
                    : 'Присоединиться'
                    }
                </button>
                <button 
                  className={`${styles.content_button} ${styles["button--catalog"]}`}
                  onClick={redirectToCatalog}>                  
                    Каталог
                </button>
              </div>
            </div>

            <div className={styles.content_right}>
              <img 
                className={styles.content_right_img} 
                src={localStorage.authenticated
                      ? "/main_img/castle.svg"
                      : "/main_img/planet.svg"} 
                alt="ShareBooks"/>
            </div>
          </main>
        </div>
        </>
      </DefaultLayout>
  );
};

export default MainPage;
