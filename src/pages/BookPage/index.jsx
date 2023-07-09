import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import { useParams } from "react-router";
import { getOneBook } from "../../api/books";
import { getToken } from "../../api";
import { getFavourite, deleteFavourite, addFavourite } from "../../api/favourites";
import { notification } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavouritesByUser } from "../../api/favourites";
import SearchForm from "../../components/Search";


const BookPage = () => {
  const params = useParams();
  const id = +(localStorage.userId);
  const [book, setBook] = useState([]);

  const findBook = async() => {
    await getOneBook(+(params.id)).then(async (res) => {
      const currentBook = res[0];
      await getFavouritesByUser(id).then((res) =>{
        for(const book of res) {
          if(book.book_id == currentBook.id) {
            currentBook.isFav = true;
          } else {
            currentBook.isFav = false;
          }
        }
      })
      setBook(currentBook);
    });
  }

  useEffect(() => {
    findBook();
  }, [])
  
  const addFav = async (e, user_id, book_id) => {
    const favourites = [];
    try {
      await getToken().then(async (token) => {
        await getFavourite().then((res) => {
          for(const obj of res) {
            if(obj.user_id == user_id) {
              favourites.push(obj);
            }
          }
        }).then(async() => {
          const book = favourites.find((book) => book.book_id == book_id);
          if(book) {
            await deleteFavourite(book.id, token);
            e.target.classList.toggle(styles.active);
            e.target.innerHTML = 'В избранное';
            return;
          } else {
            await addFavourite( user_id, book_id, token);
            e.target.classList.toggle(styles.active);
            e.target.innerHTML = 'В избранном';
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
        <div className={styles.top}>
          <div className={styles['menu_box--color']}>
              <div className={`${styles.menu_box} ${styles.container}`}>
                <div className={styles.return_button}>
                  <Link to={'/catalog'}><button>В каталог</button></Link>
                    </div>
                  <SearchForm/>
              </div>
            </div>
            <main className={`${styles.content} ${styles.container}`}>
              <div className={styles.book_description_box}>
                <div className={styles.book_description_item}>
                  <div className={styles.book_description_pictures}>
                    <img 
                      src={book.img} 
                      alt="book image"/>
                  </div>
                  <div className={styles.book_description_structure}>
                    <p className={styles.book_description_title}>{book.name}</p>
                    <p className={styles.book_description_author}>{book.author}</p>
                    <p className={styles.book_description_genre}> Жанр:</p>
                    <p className={styles.book_description_description}>{book.description}</p>
                    {localStorage.authenticated
                      ? <button 
                          onClick={(e) => addFav(e, +(localStorage.userId), book.id)} 
                          className={book.isFav
                            ? `${styles.catalog_item_in_favorits_auth} ${styles.active}`
                            : styles.catalog_item_in_favorits_auth
                          }>
                          {book.isFav ? 'В избранном' : 'В избранное'}
                        </button>
                      :<Link to={'/auth'}>
                          <button className={styles.catalog_item_in_favorits}>
                            В избранное
                          </button>
                        </Link>
                    }
                    <p className={styles.book_description_favoriteStats}> в избранном у {book.favourites_count} читателей</p>
                  </div>
                </div>
              </div>
            </main>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BookPage;
