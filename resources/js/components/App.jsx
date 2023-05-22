import React, { Component } from "react";
import ReactDOM from 'react-dom/client';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            book: [],
        };
    }

    getBookList = () => {
        let self = this;
        axios.get("/get/book/list").then(function (response) {
            self.setState({
                books: response.data,
            });
        });
        
    };

    getBookSingle = () => {
        let self = this;
        axios.post("/get/book/single", {id:1}).then(function (response) {
            self.setState({
                book: response.data,
            });
        });
        
    };

    componentDidMount() {
        this.getBookList();
        this.getBookSingle();
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">{console.log(this.state.books)}</div>
                            <div className="card-body">{console.log(this.state.book)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;