import React, {Component} from 'react';
import '../css/Bookshelf.css';
import Book from './Book';

class Bookshelf extends Component {
    constructor() {
        super();
   this.state = {
        books: [
            // {title: "Harry Potter and the Sorcerer's Stone",
            //  body: "JK Rowling, 1997"},
            // {title: "Harry Potter and the Chamber of Secrets",
            //  body: "JK Rowling, 1998"},
            // {title: "Harry Potter and the Prizoner of Azkaban", 
            //  body: "JK Rowling, 1999"}
        ]
   };
    }//constructor 
    addBook() {
        this.state.books.push({
          id: Date.now()
        });
        this.setState({
          books: this.state.books
        });
      }
    
      deleteBook(id) {
        let newBookArr = this.state.books;
        // eslint-disable-next-line
        newBookArr.map((book, index) => {
          if (id === book.id) {
            newBookArr.splice(index, 1);
          }
        });
        this.setState({
          books: newBookArr
        });
      }
    // addShelf() {
    //   //add function to add new shelf
    // }
    render() {
        return (
          <div className="all">
            <div className="div-Bookshelf">
              <div className="row">
                {this.state.books.map(book => {
                  return (
                    <Book
                      key={book.id}
                      id={book.id}
                      deleteHandler={this.deleteBook.bind(this)}
                    />
                  );
                })}
              </div>
              <div>
                <button
                  className="btn btn-success add-button"
                  onClick={this.addBook.bind(this)}
                >
                  Add Book
                </button>
              </div>
            </div>
          </div>
        );
      }
}//class Bookshelf

export default Bookshelf;