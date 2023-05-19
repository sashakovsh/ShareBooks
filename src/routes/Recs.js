import React from "react";
import axios from "axios";
import Books from "../components/Books";

const RECS_BD_PATH = 'https://anapioficeandfire.com/api/books';

class Recs extends React.Component {

    state = {
      isLoading: true,
      booksList: [],
    };
  
    getBooks = async () => {
      await axios.get(RECS_BD_PATH)
          .then(res => {
              const booksList = res.data;
              this.setState({booksList: booksList, isLoading: false})
          });
    }
  
    componentDidMount() {
      this.getBooks();
    }
  
    render() {
      const {isLoading, booksList} = this.state;
      return (
        <div className='bookList'>
            <h1>Список рекомендаций</h1>
          {isLoading ? "Loading..." : booksList.map(book => {
          return (
            <Books key={book.isbn} name={book.name} author={book.authors} />
          )
          })}
        </div>
      );
    }
  }
  

export default Recs;