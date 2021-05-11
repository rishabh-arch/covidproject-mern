import React, { useEffect, createContext, useState } from "react";
import Exfeature from "./features/Exfeature/Exfeature.jsx"
import CounterCard from "./features/CounterCard/Counter_card.jsx"
import Resource from "./features/Resource/Resource.jsx"
import Infocard from "./features/InfoCard/Infocard.jsx"
import Table from "./features/Table/Table.jsx"
import { Helmet } from "react-helmet";
export const ShareResource = createContext();
const Home = () => {
    const [SendResource, SetSendResource] = useState([]);
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
        
    }, []);

    return (
        <div>
        <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
            {/* <Infocard /> */}
            <ShareResource.Provider value={{ SendResource, SetSendResource }}>
                <Resource />
                <Table />
            </ShareResource.Provider>
            <CounterCard />
            <Exfeature />
        </div>

    )

}

export default Home;