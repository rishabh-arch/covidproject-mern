import React, { Suspense, useEffect, useState } from "react";
import Newscard from "./features/Newscard/Newscard.jsx"
// import News_container from "./News_container"
import Postcard from "./features/Newscard/postcard.jsx"
import Loading from "./loading/loading"
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination'
import { NavLink } from "react-router-dom"

const News_container = React.lazy(() => import('./News_container'));
const body = document.querySelector('#root');
const News = (News) => {
    News = News.props
    const [getPage, setPage] = useState(1)
    let active = getPage;
    let items = [];
    const [getNews, setNews] = useState([])
    const [getQureyPage, setQureyPage] = useState(1)
    const pageChanger = (e) =>{
        setPage(e);
    }
    
    useEffect(() => {
        setNews(News)
        // axios
        //     .get(`/Postnews?page=${getPage}`)
        //     .then((res) => {
               
        //         setQureyPage(res.data.itemCount)
    
        //     body.scrollIntoView({
        //         behavior: 'smooth'
        //     }, 500)}
        //     )

    }, [getNews])
    
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
            <Postcard />
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