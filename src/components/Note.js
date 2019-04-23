/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import propTypes from 'prop-types';
import '../css/Note.css';

class Note extends Component {
    constructor() {
        super();
    };


        componentWillMount() {
        this.state = {
            title: this.props.body,
            body: this.props.body,
            image: this.props.body,
            editMode: false
        }
    }

handlerEdit() {
    this.setState({
        editMode: true
    });
}

handlerSave() {
    this.setState({
        title: this.refs.titleContent.value,
        body: this.refs.bodyContent.value,
        editMode: false
    });
}

handlerDelete() {
    this.props.deleteHandler(this.props.id);
}
    
    render() {
        let titleElement, bodyElement, buttonArea;
        if (this.state.editMode) {
            titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title} ></textarea>
            bodyElement = <textarea ref="bodyContent" className="body-textarea" defaultValue={this.state.body}></textarea>;
            buttonArea=<div><button className="btn btn-info" onClick={this.handlerSave.bind(this)}>Save</button></div>
        } else {
            titleElement = <h5>{this.state.title}</h5>;
            bodyElement = <p> {this.state.body}</p>
            buttonArea = 
            <div>
                <button className="btn btn-warning" onClick={this.handlerEdit.bind(this)}>Edit</button>
                <button className="btn btn-danger" onClick={this.handlerDelete.bind(this)}>Delete</button>
            </div>

        }

        return (
            <div className="col-sm-4">
            <div class="card border-dark mb-3">
                <div className="card card-view">
                <img class="card-img-top" src="http://static.lulu.com/cmsmedia/create-page/create_page_images_book.jpg" alt="Card image cap"></img></div>
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


Note.defaultProps = {
    title: "Title",
    body: "Body",
};

Note.propTypes = {
    title: propTypes.string
}

export default Note;