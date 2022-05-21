import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="container">
      <div className="image">
          <img src="https://i.picsum.photos/id/374/200/300.jpg?hmac=O7_6jZztETgk8S2eFcdlCNlqe50qS5u-OW5hs-EoNMo" alt="" />
      </div>
      <div className="text"> My first Post </div>
      <div className="like-comment"> g</div>
    </div>
  );
}

export default Post;
