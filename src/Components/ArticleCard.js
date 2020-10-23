import React from "react";
import { Link } from 'react-router-dom';

function ArticleCard({ post, postId }) {

  const pathTo = { 
    pathname: `/article/${post.title.toLowerCase().replaceAll(" ", "-")}`,
    state: {
      postTitle: post.title,
      id: postId
    } 
  };

  return (
    <div className="col-md-6 mb-5 pb-5 blog-card">
      <div className="card border-0 bg-transparent">
        <Link to={pathTo}><div className="card-img-top blog-card-img" style={{backgroundImage: `url(${post.image})`}}>  </div></Link>
        <div className="card-body p-0 py-3">
          <span className="post-date text-muted d-inline-block my-3">{post.date}</span>
          <Link to={pathTo}><h2 className="card-title font-weight-light">{post.title}</h2></Link>
          <p className="card-text text-truncate text-wrap">{post.excerpt}</p>
          <Link to={pathTo} className="btn-link mt-3 d-inline-block"><i className="ri-arrow-drop-right-line"></i> Read Post</Link>
        </div>
      </div>
    </div>
  );

}

export default ArticleCard;