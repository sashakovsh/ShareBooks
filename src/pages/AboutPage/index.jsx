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
            <p>Добро пожаловать на наш сайт, посвященный поиску рекомендаций по книгам! Мы - команда книжных энтузиастов и библиофилов, которые разделяют страсть к чтению и неутолимое желание делиться своими литературными открытиями.
            </p>
            <p>В мире существует огромное количество книг, и порой найти следующую хорошую книгу может быть похоже на поиск иглы в стоге сена. Мы понимаем, что каждый читатель уникален и имеет свои предпочтения, поэтому наша цель - помочь вам найти именно ту книгу, которая откроет вам новые горизонты, вдохновит и перевернет ваше представление о чтении.
            </p>
            <p>Мы предлагаем удобный и интуитивно понятный интерфейс, где вы можете создать свой список любимых книг, указав произведения, которые вас впечатлили. Наш алгоритм тщательно анализирует ваш список и предлагает вам персонализированные рекомендации, основываясь на предпочтениях пользователей со схожими интересами.
            </p>
            <p>Наша миссия - не только помочь вам найти следующую книгу для чтения, но и стимулировать интерес к литературе, расширить ваш кругозор и подарить вам моменты удовольствия и размышлений, которые способна дать только хорошая книга.
            </p>
            <p>Присоединяйтесь к нам сегодня и откройте новые миры литературы вместе с нами!
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
