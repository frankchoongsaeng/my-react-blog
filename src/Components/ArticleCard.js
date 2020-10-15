import React from "react";
import blogImg from '../Images/placeholder.jpg';

function ArticleCard() {
  return (
    <div className="col-md-6 mb-5 blog-card">
      <div className="card border-0">
        <div className="card-img-top blog-card-img" style={{backgroundImage: `url(${blogImg})`}}>  </div>
        <div className="card-body p-0 py-3">
          <span className="post-date text-muted d-inline-block my-3">Oct 12</span>
          <h2 className="card-title font-weight-light">This guy really won't shut up</h2>
          <p className="card-text text-truncate text-wrap">Four new interviews in which our "CEO" shares how design can help the internet be less divisive, among other things.</p>
          <a href="google.com" className="btn-link mt-3 d-inline-block"><i class="ri-arrow-drop-right-line"></i> Read Post</a>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;