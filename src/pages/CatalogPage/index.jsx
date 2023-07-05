import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.scss";
// import { books, addFav } from "../../api/favouritesByUser";
import { getBooks } from "../../api/books";
import BookCard from "../../components/Books";
import { useState, useEffect } from "react";
// const books = [
  // {
  //   id: 1,
  //   name: "Перемените обстановку",
  //   author: "Джеймс Хедли Чейз",
  //   img: "https://knigopoisk.org/media/books/55/553425d52eb5d.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Легион. Ложь и тайна",
  //   author: "Дэн Абнетт",
  //   img: "https://knigopoisk.org/media/books/le/legion-lozh-i-tayna--62459.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Племя тьмы",
  //   author: "Клайв Баркер",
  //   img: "https://knigopoisk.org/media/books/pl/plemya-t-my--82224.jpg",
  // },
// ];

const CatalogPage = () => {

  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getBooks().then((res) => {
      setBooksList(res);
    })
  }, []);

  const [startItem, setStartItem] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(3);

  const moreBooks = () => {
    if(booksList.length < itemPerPage) {
      return;
    } 
    if(itemPerPage <= (booksList.length - 3)) {
    setItemPerPage(itemPerPage + 3);
    } else {
      setItemPerPage(itemPerPage + (booksList.length - itemPerPage));
    }
    console.log(itemPerPage);
  }
  
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
                    <div href="#" className={styles['dropdown-menu__item']}>
                      {/* onclick={}> */}
                      Фантастика
                    </div>
                  </div>
                </details>
              </div>
              <div className={`${styles.menu__item} ${styles['menu__item--has-dropdown']}`}>
                <details>
                  <summary className={styles.menu__items}>Авторы</summary>
                  <div className={styles['dropdown-menu']}>
                    {booksList.map((book) => ( //or books instead of booksList (if mapping from mockapi)
                      <div href="#" key={book.id} className={styles['dropdown-menu__item']}>
                        {/* onclick={}> */}
                        {book.author}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </menu>

            <div className={styles.search}>
              <form className={styles.search_form}>
                <input className={styles.search_input} type="text" placeholder="Введите запрос"/>
                <button className={styles.search_button} type="submit">
                  <img src="/catalog_img/Search.svg" alt=""/>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={`${styles.content} ${styles.container}`}>
          <div className={styles.catalog_box}>
            {booksList.slice(startItem,itemPerPage).map((book) => ( //or books instead of booksList (if mapping from mockapi) + without .slice()
              <div className={styles.catalog_item} key={book.id}>
                <BookCard book={book}></BookCard>
              </div>
            ))}
          </div>
          {/* button for api books */}
          <div className={styles.load_button}>
            <button onClick={moreBooks}>
              <span>Ещё книги...</span>
            </button>
          </div>
          <div className={styles.bg_block}>
              <img 
                className={styles.bg_block_img} 
                src={localStorage.authenticated
                      ? "./main_img/castle.svg"
                      : "./main_img/planet.svg"} 
                alt="ShareBooks"/>
            </div>
        </div>
      </div>
      </>
    </DefaultLayout>
  );
};

export default CatalogPage;
