import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./index.module.scss";
import { Card, Button } from "antd";
import styles from "./index.module.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { favBooks, addFav } from "../../api/favBooks";
import { Link } from "react-router-dom";

const { Meta } = Card;

const FavouritePage = () => {
  const [favBooksList, setFavBooksList] = useState(favBooks);

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1> Вот список книг, на которые вы подписаны:</h1>
        <div className={styles.content}>
          {favBooksList.map((book) => {
            if (book.isFavourite) {
              return (
                <div className={styles.bookBlock} key={book.id}>
                  <Button
                    className={styles.favBtn}
                    icon={<StarFilled />}
                    style={{ color: "#C44536" }}
                    onClick={() => addFav(book.id)}
                  />
                  <Link className={styles.link} to={"/" + book.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      style={{ width: 300 }}
                      // key={book.id}
                      cover={<img alt="example" src={book.img} />}
                      // extra={
                      //   <>
                      //   <Button
                      //     icon={<StarFilled />}
                      //     style={{ color: "#C44536" }}
                      //     onClick={() => (addFav(book.id), this.unfavourite(book.id))}
                      //   />
                      // }
                    >
                      <Meta title={book.name} description={book.author} />
                    </Card>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FavouritePage;
