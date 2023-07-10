import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import SearchForm from "../../components/Search";

const AboutPage = () => {

  const navigate = useNavigate();

  const redirect = () => {
    if(localStorage.authenticated){
      navigate("/recommended");
    } else {
      navigate("/registration");
    }
  };

  return (
      <DefaultLayout>
        <>
        <div className={styles.wrapper}>
        <div className={styles['menu_box--color']}>
          <div className={`${styles.menu_box} ${styles.container}`}>
            <SearchForm/>
          </div>
        </div>

        <main className={`${styles.content} ${styles.container}`}>
          <div className={styles.content_left}>
            <h1>Узнать больше о нас</h1>
            <p>Share Books - это проект, который помогает людям найти новые и 
              интересные книги для чтения. В нашем каталоге вы найдете описание 
              книг, какому количеству пользователей понравилась та или иная 
              книга, а также рекомендации на основе ваших предпочтений и истории 
              чтения.
            </p>
            <p>Мы верим, что чтение - это не только увлекательное занятие, но и 
              важный источник знаний и развития.</p>
            <p>Мы стремимся создать сообщество людей, которые разделяют свои 
              знания и интересы на тему чтения. Мы поощряем пользователей 
              делиться своими предпочтениями, делая рекомендации для себя и 
              других пользователей ещё точнее.
            </p>
            <p>Наша цель - сделать поиск новых книг простым, удобным и 
              увлекательным. Мы надеемся, что наш проект поможет вам расширить 
              свой кругозор, обнаружить новых авторов и жанры, а также 
              наслаждаться чтением еще больше.
            </p>
            <div className={styles.content_buttons}>
              <button 
                className={`${styles.content_button} ${styles['button--entry']}`}
                onClick={redirect}>
                {localStorage.authenticated 
                  ? 'Рекомендации' 
                  : 'Присоединиться'
                }
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

export default AboutPage;
