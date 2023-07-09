import styles from "./index.module.scss";
import BookCard from "../../components/Books";
import { useEffect, useState } from "react";
import { getRecommendations } from "../../api/recommendations";

const RecsPage = () => {
    const [recsBooksList, setRecsBooksList] = useState([]);
    const id = +(localStorage.userId);

    const getRecs = async () => {
      const data =[];
      await getRecommendations(id)
      .then((res) => {
        for(let book in res) {
          data.push(res[book])
        }
      })
      return data;
    };
    
    useEffect(() => {
      getRecs().then((res) => {
        setRecsBooksList(res);
    })}, [id]);
  
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.catalog_box}>
            {recsBooksList.map((book) => (
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

export default RecsPage;
