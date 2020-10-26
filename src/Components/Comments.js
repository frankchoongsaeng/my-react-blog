import React, { useState } from 'react';
import {addNewComment as addComment, getPostComments as getComments } from '../posts'

function Comments( { postId }) {
  const [comment, setComment] = useState("");

  function tryUploadPost(e) {
    e.preventDefault();

    if(comment) {
      addComment(postId, comment, () => {
        setComment("")
      });
    }
  }

  return (
    <>
      {/* Section for user to input a new comment */}
      <div className="post-comment mt-5">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Leave a comment</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="here's  what I have to say..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          </div>
          <div className="comment-control">
            <p className="current-user-info"><i className='bx bxs-user-circle' ></i> Anonymous</p>
            <button className="btn btn-success" href onClick={tryUploadPost} >Comment</button>
          </div>
        </form>
      </div>

      {/* The Comment Section for this post */}
      <div className="comment-section mt-5 mb-5 pt-5">
        <p>COMMENTS</p>

        {
          getComments(postId).map( (comment, index) => {
            return (
              <div className="comment" key={index} >
                <p className="current-user-info"><i className='bx bxs-user-circle' ></i> Anonymous</p>
                <div className="comment-comment" >
                  <p>{comment}</p>
                </div>
              </div>
            )}
          )
        }
      </div>
    </>
  )
}

export default Comments;