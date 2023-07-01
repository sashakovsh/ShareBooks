import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { addFav } from "../../api/favBooks";

const BookCard = (book) => {
  console.log(book);
  return (
      <div className={styles.catalog_item}>
        <div className={styles.catalog_item_pictures} alt="book image"> 
          <img src={book.book.img} alt=""/>
        </div>
          <div className={styles.catalog_item_structure}>
            <p className={styles.catalog_item_title}>{book.book.name}</p>
            <p className={styles.catalog_item_author}>{book.book.author}</p>
            <p className={styles.catalog_item_favoriteStats}> в избранном у [число] читателей</p>
            {/* comment out next <p> if use mockapi */}
            <p className={styles.catalog_item_description}>{book.book.description.substring(0, 51)}
              <Link className={styles.more_btn} to={'/' + (book.book.id)}> ...Подробнее</Link>
            </p>
            {localStorage.authenticated 
              ? <button onClick={() => addFav(book.book.id)} className={styles.catalog_item_in_favorits_auth}>В избранное</button>
              :<Link to={'/auth'}><button className={styles.catalog_item_in_favorits}>В избранное</button></Link>
          }
          </div>
    </div>
  );
};

export default BookCard;
