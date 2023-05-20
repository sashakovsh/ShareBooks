import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Card, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { getAll } from "../../api/books";
import styles from "./index.module.scss";

const { Meta } = Card;

const books = await getAll();

// const books = [
//   {
//     id: 1,
//     name: "Перемените обстановку",
//     author: "Джеймс Хедли Чейз",
//     img: "https://knigopoisk.org/media/books/55/553425d52eb5d.jpg",
//   },
//   {
//     id: 2,
//     name: "Легион. Ложь и тайна",
//     author: "Дэн Абнетт",
//     img: "https://knigopoisk.org/media/books/le/legion-lozh-i-tayna--62459.jpg",
//   },
//   {
//     id: 3,
//     name: "Племя тьмы",
//     author: "Клайв Баркер",
//     img: "https://knigopoisk.org/media/books/pl/plemya-t-my--82224.jpg",
//   },
// ];

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <>
          <div className={styles.content}>
            {books.map((book) => (
              <Card
                hoverable
                className={styles.card}
                style={{ width: 300 }}
                key={book.id}
                cover={<img alt="example" src={book.img} />}
                extra={
                  <Button
                    icon={<StarOutlined />}
                    style={{ color: "blue" }}
                    // onClick={() => handleClick(book.id)}
                  />
                }
              >
                <Meta title={book.name} description={book.author} />
              </Card>
            ))}
          </div>
        </>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
