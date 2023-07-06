import styles from "./index.module.scss";
import { Link } from "react-router-dom";
// import { addFav } from "../../api/favBooks";
import { addFavourite, deleteFavourite, getFavourite } from "../../api/favourites";
import { getToken } from "../../api";
import { notification } from "antd";

const BookCard = (book) => {
  console.log(book);

  const addFav = async (e, user_id, book_id) => {
    const favourites = [];
    try {
      await getToken().then(async (token) => {
        console.log(token);
        await getFavourite().then((res) => {
          for(const obj of res) {
            if(obj.user_id == user_id) {
              favourites.push(obj);
            }
          }
        }).then(async() => {
          const book = favourites.find((book) => book.book_id == book_id);
          console.log(book);
          if(book) {
            await deleteFavourite(book.id, token);
            e.target.classList.toggle(styles.active);
            e.target.innerHTML = 'В избранное';
          } else {
            await addFavourite( user_id, book_id, token);
            e.target.classList.toggle(styles.active);
            e.target.innerHTML = 'В избранном';
          }
        })
      });

      notification.success({
        message: "Успешно!",
        duration: 2,
      });
      
    } catch (err) {
      console.warn(err.message);

      notification.error({
        message: "Ошибка!",
        duration: 2,
      });
    }
  };

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
              ? <button onClick={(e) => addFav(e, +(localStorage.userId), book.book.id)} 
              className={book.book.isFav
                ?
                `${styles.catalog_item_in_favorits_auth} ${styles.active}`
                :
                styles.catalog_item_in_favorits_auth
                }>
                {book.book.isFav ? 'В избранном' : 'В избранное'}
                </button>
              :<Link to={'/auth'}><button className={styles.catalog_item_in_favorits}>В избранное</button></Link>
            }
          </div>
    </div>
  );
};

export default BookCard;
