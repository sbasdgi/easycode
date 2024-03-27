import React from "react";
import {
  Comments,
  Counsel,
  Courses,
  Footer,
  Header,
  Introduction,
  Roadmap,
} from "components";
function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Courses />
      <Counsel />
      <Roadmap />
      <Comments />
      <Footer />
    </>
  );
}

export default Home;
