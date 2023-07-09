import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import FavouritePage from "../FavouritePage";
import SearchForm from "../../components/Search";

const FavouriteSeparatePage = () => {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles['menu_box--color']}>
          <div className={`${styles.menu_box} ${styles.container}`}>
            <SearchForm/>
          </div>
        </div>
        <h1>Избранное</h1>
        <FavouritePage/>
      </div>
    </DefaultLayout>
  );
};

export default FavouriteSeparatePage;
