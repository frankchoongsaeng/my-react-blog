import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import bgImg from '../Images/placeholder.jpg';
import { useScrollToTop } from '../hooks';

function Article() {

  const history = useHistory();

  useScrollToTop();

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

  return (
    
    <>
      <NavBar />
      <div className="row article-header mx-0">
        <div className="col-md-6 article-header-left" style={{height: "1000px"}} >
          <div className="article-header-info-area">
            <p className="back link"><button className="btn btn-link" onClick={() => handleLinks("back")}><i className="ri-arrow-left-line"></i> back</button></p>
            <h1 className="article-title">
              This guy really won't shut up<span className="text-muted">Our "CEO" shares some thoughts in four new interviews</span>
            </h1>
          </div>
        </div>
        <div className="col-md-6 article-header-right" style={{backgroundImage: `url(${bgImg})`, height: "1000px"}} ></div>
      </div>
      
      <div className="container d-flex justify-content-center article">
        <div className="article-content">
          <p className="post-date text-muted d-inline-block my-3 mb-5">Oct 12, 2020</p>
          <p>Our founder and social media intern has been busy these last few weeks talking to all sorts of people. So we thought maybe you don't have anything better to do so why not go listen and read what this guy has to say about things like about branding and technology.</p>
          <br />
          <p>LBB, Harvest and the Journey Map and Symphonic Digital podcasts asked Halli about founding his own agency, how design can help make the internet a little less divisive, how time tracking can help people focus their creativity and why young companies often overlook the importance of digital branding and how they can rethink their approaches.</p>
          <br/>
          <p>For some insight into how Halli thinks, click these links:</p>
          <br />
          <p>Harvest: Using time tracking to fight for a more humane internet.</p>
          <br />
          <p>Halli talks to LBB about designing products and experiences infused with emotion</p>
          <br />
          <p>Journey Map podcast: The Intersection of Design and Technology with Haraldur Thorleifsson</p>
          <br />
          <p>Symphonic Digital podcast: What Contributes to Successful Branding?</p>
        </div>
      </div>

      <div className="container article-after">
        {/* Users can Upvote and downvote a post here */}
        <div className="post-interactions d-flex">
          <p><i className="ri-arrow-up-circle-line"></i> Upvote</p>
          <p><i className="ri-arrow-down-circle-line"></i> Downvote</p>
        </div>

        {/* Section for user to input a new comment */}
        <div className="post-comment mt-5">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Leave a comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="here's  what I have to say..."></textarea>
            </div>
            <div className="comment-control">
              <p className="current-user-info"><i className='bx bxs-user-circle' ></i> Anonymous</p>
              <a className="btn btn-success" href="google.com">Comment</a>
            </div>
          </form>
        </div>

        {/* The Comment Section for this post */}
        <div className="comment-section mt-5 mb-5 pt-5">
          <p>COMMENTS</p>
          <div className="comment">
            <p className="current-user-info"><i className='bx bxs-user-circle' ></i> Anonymous</p>
            <div className="comment-comment" >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
          </div>
          <div className="comment">
            <p className="current-user-info"><i className='bx bxs-user-circle' ></i> Anonymous</p>
            <div className="comment-comment" >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Article;