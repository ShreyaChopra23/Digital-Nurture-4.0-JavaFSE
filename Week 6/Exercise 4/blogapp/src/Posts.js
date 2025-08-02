// src/Posts.js
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Custom English content instead of API
  loadPosts = () => {
    const customPosts = [
      { id: 1, title: "Welcome to My Blog", body: "This is my first post. Hope you enjoy reading it!" },
      { id: 2, title: "React Lifecycle Explained", body: "Learn how React class components behave during their lifecycle." },
      { id: 3, title: "Why Use componentDidMount()", body: "It’s perfect for fetching data after the component is mounted." },
      { id: 4, title: "Handling Errors with componentDidCatch()", body: "This hook helps gracefully catch and display errors." },
      { id: 5, title: "Writing Clean React Code", body: "Maintainability is key. Break UI into small, reusable components." },
    ];
    this.setState({ posts: customPosts });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Something went wrong: " + error.message);
    console.error("Caught error:", error, info);
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

