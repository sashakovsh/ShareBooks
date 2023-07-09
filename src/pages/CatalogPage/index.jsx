import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
import { getBooks } from "../../api/books";
import BookCard from "../../components/Books";
import { useState, useEffect } from "react";
import SearchForm from "../../components/Search";


const CatalogPage = () => {

  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getBooks().then((res) => {
      setBooksList(res);
    })
  }, []);

  const [startItem, setStartItem] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(3); //will be chanched (after another get request)

  const moreBooks = () => { //will be chanched (after another get request)
    // if(booksList.length < itemPerPage) {
    //   return;
    // } 
    // if(itemPerPage <= (booksList.length - 3)) {
    // setItemPerPage(itemPerPage + 3);
    // } else {
    //   setItemPerPage(itemPerPage + (booksList.length - itemPerPage));
    // }
    getBooks().then((res) => {
      console.log(res, booksList);
      const data = [...booksList];
      for(const item of res) {
        data.push(item);
      }
      setBooksList(data);
    })
  }

  console.log(booksList);
  
  return (
    <DefaultLayout>
      <>
      <div className={styles.wrapper}>
        <div className={styles['menu_box--color']}>
          <div className={`${styles.menu_box} ${styles.container}`}>
            <menu className={styles.menu}>
              <div className={`${styles.menu__item} ${styles['menu__item--has-dropdown']}`}>
                <details>
                  <summary className={styles.menu__items}>Жанры</summary>
                  <div className={styles['dropdown-menu']}>
                  {booksList.map((book) => ( 
                      <div href="#" key={book.id} className={styles['dropdown-menu__item']}>
                        {book.category}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
              <div className={`${styles.menu__item} ${styles['menu__item--has-dropdown']}`}>
                <details>
                  <summary className={styles.menu__items}>Авторы</summary>
                  <div className={styles['dropdown-menu']}>
                    {booksList.map((book) => ( 
                      <div href="#" key={book.id} className={styles['dropdown-menu__item']}>
                        {book.author}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </menu>

            <SearchForm/>
          </div>
        </div>
        <div className={`${styles.content} ${styles.container}`}>
          <div className={styles.catalog_box}>
            {/* {booksList.slice(startItem,itemPerPage).map((book) => ( //will be chanched (after another get request)
              <div className={styles.catalog_item} key={book.id}>
                <BookCard book={book}></BookCard>
              </div>
            ))} */}
            {booksList.map((book) => ( //will be chanched (after another get request)
              <div className={styles.catalog_item} key={book.id}>
                <BookCard book={book}></BookCard>
              </div>
            ))}
          </div>
          <div className={styles.load_button}>
            <button onClick={moreBooks}>
              <span>Ещё книги...</span>
            </button>
          </div>
          <div className={styles.content_right}>
              <img 
                className={styles.content_right_img} 
                src={localStorage.authenticated
                      ? "/main_img/castle.svg"
                      : "/main_img/planet.svg"} 
                alt="ShareBooks"/>
          </div>
        </div>
      </div>
      </>
    </DefaultLayout>
  );
};

export default CatalogPage;
