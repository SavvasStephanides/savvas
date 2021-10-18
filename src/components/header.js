import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../style/header.css"
import { Link } from "gatsby"

export default function Header({highlightedLink}){
    const data = useStaticQuery(graphql`
    {
        allSeries(sort: {fields: headerLinkOrder, order: ASC}, filter: {headerLinkOrder: {gt: 0}}) {
          nodes {
            slug
            title
            headerLinkOrder
          }
        }
      }      
  `)

    return <header className="page-header">
        <div className="content">
            <div id="site-name"><Link to="/" className="handwritten-font">Savvas</Link></div>
            <section id="socials">
                <ul>
                    <li><a href="https://twitter.com/savvasstephnds" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/savvasstephanides" target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://stackexchange.com/users/457254/savv?tab=accounts" target="_blank" rel="noopener noreferrer" aria-label="Stack Exchange"><i className="fab fa-stack-exchange" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/sa.vvas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://buymeacoffee.com/SavvasStephnds" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee"><i className="fas fa-mug-hot" aria-hidden="true"></i></a></li>
                </ul>
            </section>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="sans-serif-font" aria-current={highlightedLink === "home" && "page"}>Home</Link>
                    </li>
                    {
                        data.allSeries.nodes.map((seriesItem) => {
                            return <li key={seriesItem.slug}>
                                <Link to={"/" + seriesItem.slug} className="sans-serif-font" aria-current={highlightedLink === seriesItem.slug && "page"}>{seriesItem.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    </header>
}