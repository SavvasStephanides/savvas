import React, { useEffect } from "react"
import "../style/article.css"
import { Helmet } from "react-helmet"
import hljs from 'highlight.js'
import Ad from "./ad"
import { Link } from "gatsby"

export default function Article({post}){
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return <div className="article-container">
        <Helmet>
            <title>{post.meta.title} - Savvas Stephanides</title>
            <meta name="description" content={post.meta.description}/>
            <meta name="keywords" content={post.meta.keywords}/>
            <meta name="author" content="Savvas Stephanides"/>

            <meta name="twitter:title" content={post.meta.title}></meta>
            <meta name="twitter:description" content={post.meta.description}/>
            <meta name="twitter:image" content={post.meta.twitterimage} />
            <meta name="twitter:card" content="summary_large_image" />

            <meta property="og:title" content={post.meta.title} />
            <meta property="og:url" content={"https://savvas.me/" + post.series.details.slug + "/" + post.slug + "/"} />
            <meta property="og:image" content={post.meta.twitterimage} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={post.meta.description} />
            <meta property="og:locale" content="en_GB" />

        </Helmet>

        <Thumbnail fileName={post.meta.thumbnail}/>

        <article>
            <header>
                <h1 className="serif-font">{post.meta.title}</h1>
                <div className="publish-date sans-serif-font">{post.meta.publishDate && "Published " + post.meta.publishDate.toLocaleString()}</div>
            </header>

            <div dangerouslySetInnerHTML={{__html: post.contentHtml}} className="sans-serif-font main-article"></div>

            <div className="shareOnTwitterLink">
                <a class="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?text=${post.meta.title} by @SavvasStephnds https://savvas.me/${post.series.details.slug}/${post.slug}`}>
                    🐥 Share this article on Twitter!
                </a>
            </div>

            <Ad/>

            <SeriesSection series={post.series} currentPostSlug={post.slug}/>
        </article>
        
    </div>
}

function Thumbnail({fileName}){
    return <figure className="cover">
            <img src={"/thumbnails/" + fileName} alt=""/>
    </figure>
}

function SeriesSection({series, currentPostSlug}){
    let postsFromSeries = series.posts.sort((a,b) => new Date(a.meta.publishDate) - new Date(b.meta.publishDate))

    return <section className="series-section">
        <h2 className="sans-serif-font">
            <Link to={"/" + series.details.slug}>{series.details.title}</Link> ({series.posts.length} part series)
        </h2>
        <ol>
            {
                postsFromSeries.map((postItem) => {
                    return <li key={postItem.slug} current={postItem.slug === currentPostSlug ? "1" : "0"}>
                        <Link to={"/" + series.details.slug + "/" + postItem.slug} className="sans-serif-font">
                            {postItem.meta.title}
                        </Link>
                    </li>
                })
            }
        </ol>
    </section>
}