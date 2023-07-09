import styles from "./index.module.scss";
import { useState } from "react";

const SearchForm = () => {

  const [search, setSearch] = useState({
    data: "",
  });

  const handleChange = (e) => {
    const nextFormState = {
      ...search,
      [e.target.name]: e.target.value,
    };
    setSearch(nextFormState);
  };

  const onSubmit = async () => { //get search results
  }

  return (
    <div className={styles.search}>
      <form className={styles.search_form}>
        <input 
          className={styles.search_input} 
          value={search.data} onChange={(e) => handleChange(e)}
          type="text" 
          placeholder="Введите запрос"/>
        <button 
          className={styles.search_button}
          onSubmit={() => onSubmit()}
          type="submit">
          <img src="/catalog_img/Search.svg" alt=""/>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
