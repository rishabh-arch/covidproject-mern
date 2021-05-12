import React, { Suspense, useEffect, useState } from "react";
import Newscard from "./features/Newscard/Newscard.jsx"
// import News_container from "./News_container"
import Postcard from "./features/Newscard/postcard.jsx"
import Loading from "./loading/loading"
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination'
import { NavLink,useLocation } from "react-router-dom"
import {Helmet} from "react-helmet";
const News_container = React.lazy(() => import('./News_container'));
const body = document.querySelector('#root');
const News = (News_prop) => {
    const d = useLocation();
    const search = d.pathname.toLowerCase();
    const [getPage, setPage] = useState(1)
    let active = getPage;
    let items = [];
    const [getNews, setNews] = useState([])
    const [getQureyPage, setQureyPage] = useState(1)
    const pageChanger = (e) =>{
        setPage(e);
    }
 
    useEffect(() => {
        axios
            .get(`/Postnews?page=${getPage}&ss=${News_prop.props}`)
            .then((res) => {
                setNews(res.data.news_post)
                setQureyPage(res.data.itemCount)
    
            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)}
            )

    }, [getPage])
    
    for(let number = 1; number <= Math.ceil(getQureyPage/20) ; number++) {
        items.push(
            <Pagination.Item key={number}  onClick={()=>{
                pageChanger(number);
            }} active={number === active} >
         {number}
            </Pagination.Item>,
        );
}
    const paginationBasic = (
        <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
        </div>
      );
    // console.log(posts)
    return (
        <div>
         {getNews.length===1?<><Helmet>
                <meta charSet="utf-8" />
                <title>{getNews[0].news_title}</title>
            </Helmet></>:<><Helmet>
                <meta charSet="utf-8" />
                <title>Search</title>
            </Helmet></>}
        {search==='/feed'?<>  <Helmet>
                <meta charSet="utf-8" />
                <title>Feed</title>
            </Helmet><Postcard /></>:null}
        

            <Suspense fallback={<Spinner style={{ "margin-left": "50%" }} animation="border" variant="info" />}>
                <News_container posts={getNews} />
            </Suspense>
          <div>
            {paginationBasic}
            </div>
        </div>

    )

}

export default News;