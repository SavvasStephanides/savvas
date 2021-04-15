import React, { useEffect } from "react"
import "../style/article.css"
import { Helmet } from "react-helmet"
import hljs from 'highlight.js'

export default function Article({post}){
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    

    return <div className="article-container">
        <Helmet>
            <title>{post.meta.title} - Savvas Stephanides</title>
        </Helmet>

        <Thumbnail fileName={post.meta.thumbnail}/>

        <article>
            <header>
                <h1 className="serif-font">{post.meta.title}</h1>
                <div className="publish-date sans-serif-font">{post.publishDate && "Published " + post.publishDate.toLocaleString()}</div>
            </header>

            <SeriesSection series={post.series}/>

            {/* <div className="ad" dangerouslySetInnerHTML={{__html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-2194018182042050"
                data-ad-slot="9821661269"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>`}}></div> */}
            <div dangerouslySetInnerHTML={{__html: post.contentHtml}} className="sans-serif-font main-article"></div>
        </article>
        
    </div>
}

function Thumbnail({fileName}){
    return <figure className="cover">
            <img src={"/thumbnails/" + fileName} alt=""/>
    </figure>
}

function SeriesSection({series}){
    let postsFromSeries = series.posts.sort((a,b) => new Date(a.meta.publishDate) - new Date(b.meta.publishDate))

    return <section className="series-section">
        <h2 className="sans-serif-font"><a href={"/" + series.details.slug}>{series.details.title}</a> ({series.posts.length} part series)</h2>
        <ol>
            {
                postsFromSeries.map((postItem) => {
                    return <li key={postItem.slug}><a className="sans-serif-font" href={"/" + series.details.slug + "/" + postItem.slug}>{postItem.meta.title}</a></li>
                })
            }
        </ol>
    </section>
}