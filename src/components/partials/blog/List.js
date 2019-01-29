import React from "react";
import { List, CircularProgress } from "@material-ui/core";

import ListItem from "./ListItem";

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

export default PostList;
