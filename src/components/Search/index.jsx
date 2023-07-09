import styles from "./index.module.scss";
import { useState } from "react";
import { search } from "../../api/search";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {

  const navigate = useNavigate();
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if(text.text == '') {
      return
    }
    navigate(`/search/${text.text}`)
  }

  return (
    <div className={styles.search}>
      <form 
      className={styles.search_form}
      onSubmit={(e) => onSubmit(e)}>
        <input 
          className={styles.search_input} 
          value={text.text} onChange={(e) => handleChange(e)}
          name="text"
          type="text" 
          placeholder="Введите запрос"/>
        <button 
          className={styles.search_button}
          type="submit">
          <img src="/catalog_img/Search.svg" alt=""/>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
