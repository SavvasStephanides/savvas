import React from "react"
import "../style/post-list.css"
import { Link } from "gatsby"

export default function PostList({posts}){
    return <ul className="post-list">
        {posts.map(post => <li key={post.id}>
            <Link to={"/" + post.series.details.slug + "/" + post.slug}>
                <div className="thumbnail" style={{background: "url('/thumbnails/" + post.meta.thumbnail + "')"}}></div>
                <div className="details">
                    <h3 className="serif-font">{post.meta.title}</h3>
                </div>
            </Link>
        </li>)}
    </ul>
}