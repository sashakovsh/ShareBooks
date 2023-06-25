import { Card } from "antd";
import styles from "./index.module.scss";
import { recBooks, addFav } from "../../api/favBooks";
import { Link } from "react-router-dom";

const { Meta } = Card;

const RecsPage = () => {
  return (
        <div className={styles.wrapper}>
          {!recBooks.length ? (
            <h2 style={{ paddingLeft: 155 }}>
              Для начала, необходимо выбрать хотя бы одну книгу
            </h2>
          ) : (
            <div className={styles.content}>
              {recBooks.map((book) => (
                <div className={styles.bookBlock} key={book.id}>
                  {/* <Button
                        className={styles.favBtn}
                        icon={<StarOutlined />}
                        style={{ color: "#C44536" }}
                        onClick={() => addFav(book.id)}
                    /> */}
                  <Link className={styles.link} to={"/" + book.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      style={{ width: 300 }}
                      // key={book.id}
                      cover={<img alt="example" src={book.img} />}
                      // extra={
                      //   <Button
                      //     icon={<StarOutlined />}
                      //     style={{ color: "#C44536" }}
                      //     onClick={() => addFav(book.id)}
                      //   />
                      // }
                    >
                      <Meta title={book.name} description={book.author} />
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
  );
};

export default RecsPage;
