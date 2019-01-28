import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "./Form.css";

export class Form extends Component {
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
        />
        <Button className="formActionButton" color="primary">
          Save
        </Button>
        <Button className="formActionButton" color="default" onClick={this.props.onCancel}>
          Cancel
        </Button>
        <Button className="formActionButton" color="secondary">
          Delete
        </Button>
      </form>
    );
  }
}

export default Form;
