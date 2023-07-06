import { Card } from "antd";
import styles from "./index.module.scss";
// import { recBooks, addFav } from "../../api/favouritesByUser";
import BookCard from "../../components/Books";
import { useEffect, useState } from "react";
import { getRecommendations } from "../../api/recommendations";

// const { Meta } = Card;

const RecsPage = () => {
    const [recsBooksList, setRecsBooksList] = useState([]);
    const id = +(localStorage.userId);

    const getRecs = async () => {
        await getRecommendations(id).then((res) => {
            setRecsBooksList(res);
        })
    };
    
    useEffect(() => {
      getRecs();
    }, [id]);
  
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1> Взгляни на рекомендации:</h1>
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
