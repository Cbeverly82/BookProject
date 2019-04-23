import React, {Component} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "Book Title",
  GENERIC_NOTE_BODY = "Author, Year";

class Note extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.state = {
          title: GENERIC_NOTE_TITLE,
          body: GENERIC_NOTE_BODY,
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
    // const checkbox
    // unread() {
    //     // function for checkbox .checked = false
    // }
    // read() {
    //     checkbox.checked = true
    // }
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
        <div className="col-sm-4">
            <div className="card card-view">
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

Note.defaultProps={
    title: "Book Title",
    body: "Author, Year"
};

Note.propTypes={
    title: PropTypes.string

};

export default Note;