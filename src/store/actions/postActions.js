const addPost = post => {
  //some async call to db
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid || null;
    const userName = getState().firebase.profile.username;
    //console.log('state', getState());
    console.log("post", post);
    firestore
      .collection("posts")
      .add({
        ...post,
        createdBy: { userId, userName },
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_POST", post });
      })
      .catch(err => {
        dispatch({ type: "ADD_POST_ERROR", err });
      });
  };
};

const editPost = post => {
  //some async call to db
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid || null;
    const userName = getState().firebase.profile.username;

    firestore
      .collection("posts")
      .doc(post.id)
      .update({
        ...post,
        updatedBy: { userId, userName },
        updatedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_POST", post });
      })
      .catch(err => {
        dispatch({ type: "EDIT_POST_ERROR", err });
      });
  };
};

const deletePost = post => {
  //some async call to db
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(post.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "DELETE_POST_ERROR", err });
      });
  };
};

export { addPost, editPost, deletePost };
