import React from "react";
import axios from "axios";
import Books from "../components/Books";

const FAVOURITE_BD_PATH = 'https://anapioficeandfire.com/api/books';

class Favourite extends React.Component {

  state = {
    isLoading: true,
    favBooksList: [],
  };

  getBooks = async () => {
    await axios.get(FAVOURITE_BD_PATH)
        .then(res => {
            const favBooksList = res.data;
            this.setState({favBooksList: favBooksList, isLoading: false})
        });
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const {isLoading, favBooksList} = this.state;
    return (
      <div className='favBookList'>
        <h1>Список избранного</h1>
        {isLoading ? "Loading..." : favBooksList.map(book => {
        return (
          <Books key={book.isbn} name={book.name} author={book.authors} />
        )
        })}
      </div>
    );
  }
}

export default Favourite;