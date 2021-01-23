import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: "",
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        posts: response.data.slice(0, 10),
      });
    });
  }

  render() {
    const postList = this.state.posts.length ? (
      this.state.posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <div className="card-title">{post.title}</div>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No post yet</div>
    );
    return <div>{postList}</div>;
  }
}

export default Posts;
