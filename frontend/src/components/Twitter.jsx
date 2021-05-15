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
      <div className="alert alert-primary" role="alert">
        Select the Boxes For requirements <span className="alert-link">then press Goto Link button</span>. to navigate details on Twitter <span className="alert-link">Thanks.</span>
      </div>
      <Twitterbot />
    </>

  )

}

export default Twitter;