import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
// import { books, addFav} from "../../api/favouritesByUser";
import { useParams } from "react-router";
import { getBooks } from "../../api/books";
import { getToken } from "../../api";
import { getFavourite, deleteFavourite, addFavourite } from "../../api/favourites";
import { notification } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookPage = () => {
  const params = useParams();
  const [book, setBook] = useState([]);

  const findBook = async() => {
    await getBooks()
      .then(async(res) => {
        const book = res.find(book => book.id === +(params.id));
        setBook(book);
      })
  }

  useEffect(() => {
    findBook();
  }, [])
  
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
            await getBooks();
            return;
          } else {
            await addFavourite( user_id, book_id, token);
            e.target.classList.toggle(styles.active);
            e.target.innerHTML = 'В избранном';
            await getBooks();
            return;
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
    <>
      <DefaultLayout>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.bookBlock}>
            <img className={styles.bookCover} src={book.img}></img>
            </div>
            <div className={styles.bookDescription}>
                <h2>{book.name}</h2>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
            </div>
            {localStorage.authenticated
              ? <button onClick={(e) => addFav(e, +(localStorage.userId), book.id)} 
              className={book.isFav
                ?
                `${styles.catalog_item_in_favorits_auth} ${styles.active}`
                :
                styles.catalog_item_in_favorits_auth
                }>
                {book.isFav ? 'В избранном' : 'В избранное'}
                </button>
              :<Link to={'/auth'}><button className={styles.catalog_item_in_favorits}>В избранное</button></Link>
            }
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BookPage;
