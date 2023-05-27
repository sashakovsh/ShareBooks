import DefaultLayout from "../../layouts/DefaultLayout";
import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { books, addFav} from "../../api/favBooks";
import { useParams } from "react-router";

const BookPage = () => {
  const params = useParams();
  const book = books.find(book => book.id === params.id);

  return (
    <>
      <DefaultLayout>
        <>
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
                {/* Описание книги */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis officiis deserunt fuga quae voluptatibus quos, hic, 
                    blanditiis soluta eveniet praesentium delectus quo numquam 
                    sequi fugiat voluptates veritatis accusantium? Et labore 
                    expedita tenetur, ea, esse provident sed nostrum quam 
                    laudantium minima pariatur veritatis! Pariatur commodi 
                    libero odio aspernatur! Est cum deserunt velit libero 
                    laudantium, necessitatibus repellat ad quos vitae, 
                    asperiores ipsa assumenda. Perspiciatis facilis molestiae 
                    ratione itaque ipsa fugit rerum vero, error earum 
                    dignissimos nisi id sint enim delectus, adipisci qui libero 
                    consectetur officia animi aliquid. Deserunt voluptatem eius 
                    eligendi officia explicabo maiores, delectus voluptatibus. 
                    Praesentium quasi fuga deserunt nobis eaque.
                </p>
            </div>
          </div>
        </>
      </DefaultLayout>
    </>
  );
};

export default BookPage;


