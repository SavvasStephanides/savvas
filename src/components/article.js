import React from "react"
import "../style/article.css"
import { Helmet } from "react-helmet"

export default function Article({title, thumbnail, content, publishDate}){
    return <div className="article-container">
        <Helmet>
            <title>{title} - Savvas Stephanides</title>
        </Helmet>
        <figure className="cover">
            <img src={"/thumbnails/" + thumbnail} alt=""/>
        </figure>
        <article>
            <header>
                <h1 className="serif-font">{title}</h1>
                <div className="publish-date sans-serif-font">{publishDate && "Published " + publishDate.toLocaleString()}</div>
            </header>
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
            <div dangerouslySetInnerHTML={{__html: content}} className="sans-serif-font main-article"></div>
        </article>
        
        
    </div>
}