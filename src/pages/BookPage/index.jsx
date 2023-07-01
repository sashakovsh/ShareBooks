import DefaultLayout from "../../layouts/DefaultLayout";
import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { books, addFav} from "../../api/favBooks";
import { useParams } from "react-router";
import { booksList } from "../../api/books";


const BookPage = () => {
  const params = useParams();
  const book = booksList.find(book => book.id === +(params.id)); //or books instead of booksList & params.id instead of +(params.id) (for mockapi)

  return (
    <>
      <DefaultLayout>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.bookBlock}>
            <img className={styles.bookCover} src={book.img}></img>
            <Button
                className={styles.favBtn}
                icon={<StarOutlined />}
                style={{ color: "#C44536" }}
                onClick={() => addFav(book.id)}
              />
            </div>
            <div className={styles.bookDescription}>
                <h2>{book.name}</h2>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BookPage;
