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
            <meta charset="UTF-8"/>
            <meta name="description" content={"An article about " + post.meta.title}/>
            <meta name="keywords" content={"programming, code, " + post.series.details.title}/>
            <meta name="author" content="Savvas Stephanides"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>

        <Thumbnail fileName={post.meta.thumbnail}/>

        <article>
            <header>
                <h1 className="serif-font">{post.meta.title}</h1>
                <div className="publish-date sans-serif-font">{post.meta.publishDate && "Published " + post.meta.publishDate.toLocaleString()}</div>
            </header>

            <SeriesSection series={post.series} currentPostSlug={post.slug}/>

            <div className="ad" dangerouslySetInnerHTML={{__html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-2194018182042050"
                data-ad-slot="9821661269"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>`}}></div>

            <div dangerouslySetInnerHTML={{__html: post.contentHtml}} className="sans-serif-font main-article"></div>

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
        <h2 className="sans-serif-font"><a href={"/" + series.details.slug}>{series.details.title}</a> ({series.posts.length} part series)</h2>
        <ol>
            {
                postsFromSeries.map((postItem) => {
                    return <li key={postItem.slug} current={postItem.slug === currentPostSlug ? "1" : "0"}>
                        <a 
                            className="sans-serif-font" 
                            href={"/" + series.details.slug + "/" + postItem.slug}>
                                {postItem.meta.title}
                        </a>
                    </li>
                })
            }
        </ol>
    </section>
}