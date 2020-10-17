import React from 'react';
import AllPost from './AllPost';
import NavBar from './NavBar';
import Footer from './Footer';
import { useScrollToTop } from '../hooks';

function Home() {

  useScrollToTop();

  return (
    <>
      <NavBar />
      <AllPost />
      <Footer  />
    </>
  )
}

export default Home;