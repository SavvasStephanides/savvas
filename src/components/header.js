import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../style/header.css"

export default function Header({highlightedLink}){
    const data = useStaticQuery(graphql`
        query {
            allSeries {
                nodes {
                    slug
                    title
                }
            }
        }
  `)

    return <header>
        <div id="site-name"><a href="/" className="handwritten-font">Savvas</a></div>
        <nav>
            <ul>
                <li><a href="/" className="sans-serif-font" aria-current={highlightedLink === "home" && "page"}>Home</a></li>
                {
                    data.allSeries.nodes.map((seriesItem) => {
                        return <li key={seriesItem.slug}>
                            <a href={"/" + seriesItem.slug} className="sans-serif-font" aria-current={highlightedLink === seriesItem.slug && "page"}>{seriesItem.title}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    </header>
}