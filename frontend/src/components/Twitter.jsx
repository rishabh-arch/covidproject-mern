import React, { useEffect } from "react";
import Twitterbot from "./features/Table/Twitterbot"
import { Helmet } from "react-helmet";

const Twitter = () => {
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Twitter</title>
      </Helmet>
      <div class="alert alert-primary" role="alert">
        Select the Boxes For requirements <span class="alert-link">then press Goto Link button</span>. to navigate details on Twitter <span class="alert-link">Thanks.</span>
      </div>
      <Twitterbot />
    </>

  )

}

export default Twitter;