import React from 'react';
import ArticleCard from './ArticleCard';
import { getAllPosts } from '../posts.js';

function AllPost() {
  return (
    <div className="container">
      <div className="spacer py-5 my-5"></div>

      <div className="row">
        {
          getAllPosts().map( (post, index) => <ArticleCard key={post.title + "," + post.date} post={post} postId={index}/> )
        }
      </div>

      <div className="spacer py-5 my-5"></div>
    </div>
  );
}

export default AllPost;