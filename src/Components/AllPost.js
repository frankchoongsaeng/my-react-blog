import React from 'react';
import ArticleCard from './ArticleCard';

function AllPost() {
  return (
    <div className="container">
      <div className="spacer py-5 my-5"></div>

      <div className="row">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <div className="spacer py-5 my-5"></div>
    </div>
  );
}

export default AllPost;