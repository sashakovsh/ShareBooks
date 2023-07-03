import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

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
        <p>Здесь будет страница о проекте</p>
        <button className={styles.recsBtn} onClick={redirect}>
            {localStorage.authenticated 
              ? 'Рекомендации' 
              : 'Присоединиться'
            }
        </button>
        </>
      </DefaultLayout>
  );
};

export default AboutPage;
