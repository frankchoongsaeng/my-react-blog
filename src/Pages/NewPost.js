import React, { useState } from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { createPost } from '../posts';
import { useHistory } from 'react-router-dom';

function NewPost({ location }) {

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("")
  const history = useHistory();

  function handleChange(e) {
    setImage(e.target.value);
  }

  function handleCreatePost(e) {
    e.preventDefault();
    if(createPost(image, title, subtitle, excerpt, content)){
      history.replace("/");
    }
    else {
      alert("Could not create new Post, In");
    }
  }

  return (
    <div>
      <NavBar />
      <div className="sign-up mt-5 pt-5 full-vh">
        <div className="container" >
          <form>
            <div className="row">
              <div className="col form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="enter a post title here" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="col form-group">
                <label>Subtitle</label>
                <input type="text" className="form-control" placeholder="this post needs a subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="formControlTextarea1">Excerpt</label>
              <textarea className="form-control" id="formControlTextarea1" rows="3" placeholder="write something juicy..." onChange={(e) => setExcerpt(e.target.value)} defaultValue={excerpt}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="formControlTextarea2">Post Content</label>
              <textarea className="form-control" id="formControlTextarea2" rows="10" placeholder="write something juicy..." onChange={(e) => setContent(e.target.value)}  defaultValue={content}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">upload an image</label>
              {/* <input type="file" className="form-control-file" id="exampleFormControlFile1" value={image} onChange={handleChange} /> */}
              <input type="url" className="form-control-file" id="exampleFormControlFile1" value={image} onChange={handleChange} placeholder="place image url here" />
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary" onClick={handleCreatePost} >Create Post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewPost;