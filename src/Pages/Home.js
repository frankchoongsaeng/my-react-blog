import React from 'react';
import AllPost from '../Components/AllPost';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useScrollToTop } from '../Helpers/helpers';

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