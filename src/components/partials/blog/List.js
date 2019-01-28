import React from "react";
import { List, CircularProgress } from "@material-ui/core";

import ListItem from "./ListItem";

import { connect } from "react-redux";

const styles = {
  progressBar: {
    margin: 30
  }
};

const PostList = props => {
  return (
    <List>
      {props.posts ? (
        props.posts.map(post => <ListItem post={post} key={post.id} />)
      ) : (
        <CircularProgress style={styles.progressBar} color="primary" />
      )}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};
export default connect(mapStateToProps)(PostList);
