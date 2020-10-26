import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { useScrollToTop } from '../Helpers/helpers';
import { getPostById as getPost, doesPostExist as isPost } from '../posts'; 
import Comments from '../Components/Comments';
import { persistUserAction as registerVote, getCurrentInteractionOnPost as getVote } from '../Helpers/storageHelper';

function Article(props) {
  const [vote, setVote] = useState(getVote(props.location.state.id));
  const history = useHistory();
  useScrollToTop();

  let path = props.location.pathname.split("/");
  let id = null;

  try {
    id = props.location.state.id;
  } catch (idNotFound) {
    console.log("could not find any id @ state.id \n trying the title....");
    try {
      id = props.location.state.postTitle 
    } catch (titleNotFound) {
      console.log("could not find any title @ state.postTitle\ntrying to extract from the url");
      try {
        id = path[path.length - 1].replaceAll("-", " ")
      } catch (urlTitleNotFound) {
        console.log("No such post exists");
      }
    }
  }

  let post  = null;

  if(isPost(id)) {
    console.log("found id: " + id)
    post = getPost(id);
    console.log(post);
  } else {
    console.log("could not find an id");
    return (
      <>
        <NavBar />
        <main role="main" className="container" style={{height: "100vh", paddingTop: "160px"}}>
          <div className="starter-template">
            <h1>Hola! el articulo que quieres no existe.</h1>
            <h3><b className="bg-warning text-dark" style={{padding: "10px 0px", display: "inline-block"}}>Este es un error de 404</b></h3>
            <br />
            <p className="lead">
              We're really hoping you didn't understand that
              <br/>
              head back to the <Link to='/'>Home Page</Link> where things are easier to understand
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  function handleLinks(linkTo = null) {
    if(linkTo) {
      switch(linkTo) {
        case "back":
          history.goBack();
          break;
        default:
          history.push(linkTo)
          break;
      }
    }
  }

  function handleVote(voteDirection) {
    registerVote(id, voteDirection, (vote_type) => {
      setVote(vote_type);
    });
  }

  return (
    
    <>
      <NavBar />
      <div className="row article-header mx-0">
        <div className="col-md-6 article-header-left" style={{height: "1000px"}} >
          <div className="article-header-info-area">
            <p className="back link"><button className="btn btn-link" onClick={() => handleLinks("back")}><i className="ri-arrow-left-line"></i> back</button></p>
            <h1 className="article-title">
               {post.title}<span className="text-muted">{post.subTitle}</span>
            </h1>
          </div>
        </div>
        <div className="col-md-6 article-header-right" style={{backgroundImage: `url(${post.image})`, height: "1000px"}} ></div>
      </div>
      
      <div className="container d-flex justify-content-center article">
        <div className="article-content">
          <p className="post-date text-muted d-inline-block my-3 mb-5">{post.date}</p>
          <div dangerouslySetInnerHTML={ { __html: post.content } }></div>
        </div>
      </div>

      <div className="container article-after">
        {/* Users can Upvote and downvote a post here */}
        <div className="post-interactions d-flex is-justify-content-center is-align-items-center">
          <p style={ {color: vote === true ? "green" : "inherit"} } onClick={() => handleVote("upvote")} ><i className="ri-arrow-up-circle-line"></i> Upvote</p>
          {/* <p style={{padding: "0px 10px 0px 0px", fontSize: "24px", fontWeight:"bold", position: "relative", top: "19px"}}> <span>{0}</span> </p> */}
          <p style={ {color: vote === false ? "red" : "inherit"} } onClick={() => handleVote("downvote")} ><i className="ri-arrow-down-circle-line"></i> Downvote</p>
        </div>

        <Comments postId={id} />
      </div>

      <Footer />
    </>
  );
}

export default Article;