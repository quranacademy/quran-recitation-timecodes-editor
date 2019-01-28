const initState = {
  posts: [
    {
      id: "1",
      title: "test post 1",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam officia sequi, ipsa fugiat possimus, repudiandae laboriosam reprehenderit cumque voluptate doloremque non mollitia ipsum odit perspiciatis ducimus nam aliquid animi?"
    },
    {
      id: "2",
      title: "test post 2",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam officia sequi, ipsa fugiat possimus, repudiandae laboriosam reprehenderit cumque voluptate doloremque non mollitia ipsum odit perspiciatis ducimus nam aliquid animi?"
    }
  ]
};

const postReducer = (state = initState, action) => {
  return state;
};

export default postReducer;
