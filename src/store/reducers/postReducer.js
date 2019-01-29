const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("added post", action.post);
      return state;
    case "ADD_POST_ERROR":
      console.log("add post error", action.err);
      return state;
    case "EDIT_POST":
      console.log("edited post", action.post);
      return state;
    case "EDIT_POST_ERROR":
      console.log("edit post error", action.err);
      return state;
    case "DELETE_POST":
      console.log("deleted post", action.post);
      return state;
    case "DELETE_POST_ERROR":
      console.log("delete post error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
