import React, {Component} from 'react';
import '../css/Book.css';
import PropTypes from 'prop-types';

const GENERIC_BOOK_TITLE = "Book Title",
  GENERIC_BOOK_BODY = "Author, Year";

class Book extends Component {
    // eslint-disable-next-line
    constructor() {
        super();
                this.state = {
                    books: [
                    ]
                };
             }
    componentWillMount() {
        // eslint-disable-next-line
        this.state = {
          title: GENERIC_BOOK_TITLE,
          body: GENERIC_BOOK_BODY,
          editMode: false
        };
      }
    
    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleSave() {
        this.setState( {
            title: this.refs.titleContent.value,
            body: this.refs.bodyContent.value,
            editMode: false
        });
    }
    handleDelete() {
        this.props.deleteHandler(this.props.id);
      }
render() {
    let titleElement, bodyElement, buttonArea;
    if (this.state.editMode) {
        titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>
        bodyElement = <textarea ref="bodyContent" className="body-textarea" defaultValue={this.state.body}></textarea>
        buttonArea = <div><button className = "btn btn-info" onClick={this.handleSave.bind(this)}>Save</button></div>
    } else {
        titleElement = <h5>{this.state.title}</h5>;
        bodyElement = <p>{this.state.body}</p>;
        buttonArea = (<div><button className="btn btn-warning" onClick = {this.handleEdit.bind(this)}>Edit</button>
                           <button className="btn btn-danger" onClick = {this.handleDelete.bind(this)}>Delete</button>
                        <form>
                            <label>
                                    Have read:
                                    <input
                                        name="haveRead"
                                        type="checkbox"
                                        checked={this.state.haveRead}
                                        onChange={this.handleInputChange} />
                                    </label>
                                
                                </form>
                         </div>);
    };
    return (
//render html components for the card/book. Book.js deals with the area the card/book appears on.
        <div className="col-sm-4">
        <div className="cardBorder">
            <div className="card card-view">
            <img class="card-img-top" src="http://static.lulu.com/cmsmedia/create-page/create_page_images_book.jpg" alt="book thumbnail"></img></div>
                <div className="card-body">
                    {titleElement}
                    {bodyElement}
                    {buttonArea}
                </div>
            </div>
        </div>
    );
}
}

Book.defaultProps={
    title: "Book Title",
    body: "Author, Year"
};

Book.propTypes={
    title: PropTypes.string

};

export default Book;