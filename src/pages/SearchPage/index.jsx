import { useEffect, useState } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
// import BookCard from "../../components/Books";
// import { getFavouritesByUser } from "../../api/favourites";
import { useParams } from "react-router-dom";
import { search } from "../../api/search";
import BookCard from "../../components/Books";
import DefaultLayout from "../../layouts/DefaultLayout";
import SearchForm from "../../components/Search";
import { Link } from "react-router-dom";
import { getFavouritesByUser } from "../../api/favourites";


const SearchPage = () => {
  const param = useParams();
  const id = +(localStorage.userId);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async() => {
    await search(param.text).then(async (res) => {
      const foundedBooks = res;
      if(localStorage.authenticated){      
        await getFavouritesByUser(id).then((res) =>{
        for(const book of res) {
          for(const foundedBook of foundedBooks) {
            if(foundedBook.id == book.book_id) {
              foundedBook.isFav = true;
            }
          }
        }
      })} 
      setSearchResult(foundedBooks);
    })
  }

  useEffect(() => {
    handleSearch()
  }, [param])

  console.log(searchResult);

  return (
    <>
    <DefaultLayout>
      <div className={styles.wrapper}>
      <div className={styles.top}>
      <div className={styles['menu_box--color']}>
              <div className={`${styles.menu_box} ${styles.container}`}>
                <div className={styles.return_button}>
                  <Link to={'/catalog'}><button>В каталог</button></Link>
                    </div>
                  <SearchForm/>
              </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.catalog_box}>
            {searchResult.map((book) => ( 
              <div className={styles.catalog_item} key={book.id}>
                <BookCard book={book}></BookCard>
              </div>
            ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </DefaultLayout>
    </>
  );
};

export default SearchPage;
