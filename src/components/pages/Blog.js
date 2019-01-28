import React, { Fragment, Component } from "react";
import PostList from "../partials/blog/List";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "../partials/blog/Form";

export class Blog extends Component {
  state = { addMode: false };
  toggleAddMode = () => {
    this.setState({ addMode: !this.state.addMode });
  };
  render() {
    return (
      <Fragment>
        <PostList />
        <Button
          style={fabStyle}
          onClick={this.toggleAddMode}
          variant="fab"
          color="primary"
          aria-label="Add"
        >
          <AddIcon />
        </Button>
        {this.state.addMode ? (
          <Form data={{ title: "", text: "" }} onCancel={this.toggleAddMode} />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

export default Blog;
