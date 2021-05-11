import React,{useEffect} from "react";
import Covidtable from "./features/Table/covidTable.jsx"
import { Helmet } from "react-helmet";
const Coronolive = () =>{
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
  }, [])
  return (
<div>
      <Helmet>
                  <meta charSet="utf-8" />
                  <title>Corona-Live-Cases</title>
              </Helmet>
<div class="alert alert-primary" role="alert">
  This Page Reflects <span class="alert-link">Live Covid Cases</span>. Stay Home,Stay Safe <span class="alert-link">And Dont try to increase these Numbers.</span> 
</div>
<Covidtable/>
</div>
        
    )

}

export default Coronolive;