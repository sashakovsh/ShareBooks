import React from "react";
import { Card, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

const BookCard = (book, onClick) => {
  console.log(book)
  return (
    <Card
      hoverable
      className={styles.card}
      style={{ width: 240 }}
      key={book.id}
      title={book.name}
      cover={<img alt="example" src={book.img} />}
      // extra={
      //   <>
      //   <Button
      //     shape="circle"
      //     icon={<StarOutlined />}
      //     style={{ color: "white", zIndex: 10 }}
      //     onClick={onClick}
      //   />
      // }
    >
      {book.author}
    </Card>
  );
};

export default BookCard;
