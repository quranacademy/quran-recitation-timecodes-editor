import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "./Form.css";
import { connect } from "react-redux";
import { addPost, editPost, deletePost } from "../../../store/actions/postActions";

const initialState = { title: "", text: "" };

export class Form extends Component {
  state = this.props.data ? this.props.data : initialState;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    const { id, title, text } = this.state;
    if (id) {
      this.props.editPost({ id, title, text });
    } else {
      this.props.addPost({ title, text });
      this.setState(initialState);
    }
    this.props.onCancel();
  };

  handleDelete = () => {
    const { id, title, text } = this.state;
    const confirmation = window.confirm("Are you sure? ");
    if (confirmation) this.props.deletePost({ id, title, text });
    this.props.onCancel();
  };

  handleCancel = () => {
    this.props.onCancel();
    this.setState(initialState);
  };

  render() {
    const { title, text } = this.props.data;
    return (
      <form noValidate autoComplete="off">
        <TextField
          autoFocus
          id="title"
          label="title"
          type="text"
          variant="outlined"
          className="title"
          defaultValue={title}
          onChange={this.handleChange}
        />
        <TextField
          id="text"
          className="text"
          label="text"
          multiline
          rows={4}
          rowsMax={Infinity}
          variant="outlined"
          defaultValue={text}
          onChange={this.handleChange}
        />
        <Button className="formActionButton" color="primary" onClick={this.handleSubmit}>
          Save
        </Button>
        <Button className="formActionButton" color="default" onClick={this.handleCancel}>
          Cancel
        </Button>
        <Button className="formActionButton" color="secondary" onClick={this.handleDelete}>
          Delete
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post)),
    editPost: post => dispatch(editPost(post)),
    deletePost: post => dispatch(deletePost(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
