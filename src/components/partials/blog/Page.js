import React, { Fragment, Component } from "react";
import PostList from "./List";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Blog extends Component {
  state = { addMode: false };
  toggleAddMode = () => {
    this.setState({ addMode: !this.state.addMode });
  };
  render() {
    return (
      <Fragment>
        <PostList posts={this.props.posts} />
        <Fab style={fabStyle} onClick={this.toggleAddMode} color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
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

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Blog);
