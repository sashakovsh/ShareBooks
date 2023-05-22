import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Card, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import {recBooks, addFav} from "../../api/favBooks";

const { Meta } = Card;

const RecsPage = () => {
  return (
    <>
      <DefaultLayout>
        <>
          { !recBooks.length ? 
          <h2 style={{ paddingLeft: 155}}>Для начала, необходимо выбрать хотя бы одну книгу</h2> 
          :
          <div className={styles.content}>
            {recBooks.map((book) => (
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
                    onClick={() => addFav(book.id)}
                  />
                }
              >
                <Meta title={book.name} description={book.author} />
              </Card>
            ))}
          </div>
          }
        </>
      </DefaultLayout>
    </>
  );
};

export default RecsPage;
