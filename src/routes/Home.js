import React from 'react';
import Books from '../components/Books';
import axios from 'axios';

const BD_PATH = 'https://anapioficeandfire.com/api/books';

class Home extends React.Component {

  state = {
    isLoading: true,
    booksList: [],
  };

  getBooks = async () => {
    await axios.get(BD_PATH)
        .then(res => {
            const booksList = res.data;
            this.setState({booksList: booksList, isLoading: false})
        });
    // console.log(booksList.data);
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const {isLoading, booksList} = this.state;
    return (
      <div className='bookList'>
        <h1>Список всех книг</h1>
        {isLoading ? "Loading..." : booksList.map(book => {
        // console.log(book);
        return (
          <Books key={book.isbn} name={book.name} author={book.authors} />
        )
        })}
      </div>
    );
  }
}

export default Home;
