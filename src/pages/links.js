import React from "react"
import "../style/fontawesome/css/all.css"
import { Helmet } from "react-helmet"
import "../style/links.css"

export default function Links(){

    let items = [
        {
            name: "Website",
            url: "https://savvas.me"
        },
        {
            name: "Github",
            url: "https://www.github.com/savvasstephanides"
        },
        {
            name: "Newsletter",
            url: "https://www.getrevue.co/profile/savvasstephnds"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/savvasstephnds"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/savvasstephanides"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/sa.vvas"
        }
    ]
    return <div>
        <Helmet>
            <title>Savvas | Links</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Montserrat:wght@500&family=Pacifico&display=swap" rel="stylesheet"/>
        </Helmet>
        <header>
            <h1 id="name">Savvas</h1>
        </header>

        <main>
            <ul>
                {
                    items.map((item) => {
                        return <li><a href={item.url}>{item.name}</a></li>
                    })
                }
                
            </ul>
        </main>
    </div>
}
