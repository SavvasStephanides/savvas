import React from "react"
import "../style/general.css"
import "../style/fontawesome/css/all.css"
import "../style/highlight.css"
import Header from "../components/header"
import Footer from "../components/footer"

import { Helmet } from "react-helmet"

export default function Layout({children, highlightedLink}){
    
    return <div id="app">
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Montserrat:wght@500&family=Pacifico&display=swap" rel="stylesheet"/>
        </Helmet>
        <Header highlightedLink={highlightedLink}/>
        <main>
            {children}
        </main>
        <Footer/>
        

    </div>
}