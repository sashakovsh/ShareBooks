import styles from "./index.module.scss";
import { useState } from "react";

const SearchForm = () => {

  const [text, setSearch] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const nextFormState = {
      ...text,
      [e.target.name]: e.target.value,
    };
    setSearch(nextFormState);
  };

  const onSubmit = async () => {
  }

  return (
    <div className={styles.search}>
      <form className={styles.search_form}>
        <input 
          className={styles.search_input} 
          value={text.text} onChange={(e) => handleChange(e)}
          name="text"
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
