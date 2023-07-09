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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Obcaecati, saepe voluptatibus. Quos, molestiae sed tempore rerum 
              quam soluta, laboriosam commodi ipsam dolorem reiciendis officiis? 
              Architecto ipsum accusamus labore sunt, voluptatibus porro animi 
              rem!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Obcaecati, saepe voluptatibus. Quos, molestiae sed tempore rerum. 
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Obcaecati, saepe voluptatibus. Quos, molestiae sed tempore rerum.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Obcaecati, saepe voluptatibus. Quos, molestiae sed tempore rerum.
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
                ? "./main_img/castle.svg"
                : "./main_img/planet.svg"} 
              alt="ShareBooks"/>          
          </div>
        </main>
        </div>
        </>
      </DefaultLayout>
  );
};

export default AboutPage;
