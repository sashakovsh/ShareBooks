import DefaultLayout from "../../layouts/DefaultLayout";
import RecsPage from "../RecsPage";
import styles from "./index.module.scss";
import SearchForm from "../../components/Search";

const RecsSeparatePage = () => {
  return (
    <>
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles['menu_box--color']}>
          <div className={`${styles.menu_box} ${styles.container}`}>
            <SearchForm/>
          </div>
        </div>
        <h1>Рекомендации</h1>
        <RecsPage/>
      </div>
    </DefaultLayout>
    </>
  );
};

export default RecsSeparatePage;
