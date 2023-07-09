import { useEffect, useState } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
import BookCard from "../../components/Books";
import { getFavouritesByUser } from "../../api/favourites";

const FavouritePage = () => {
  const [favsBooksList, setFavsBooksList] = useState([]);
  const id = localStorage.userId;
  const list = async() => await getFavouritesByUser(id);

  useEffect(() => {
    list().then((res) => {
      setFavsBooksList(res);
    })
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.catalog_box}>
          {favsBooksList.map((book) => (
              <div className={styles.catalog_item} key={book.id}>
                <BookCard book={book}></BookCard>
              </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
