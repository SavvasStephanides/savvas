import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import Article from "../components/article"

export default function Post({data}) {
    
    const post = data.post
    console.log(new Date(post.meta.publishDate));
    return <Layout highlightedLink={post.series.slug}>
        <Helmet>
          <title>{post.meta.title} - Savvas Stephanides</title>
        </Helmet>
        
        <Article title={post.meta.title} thumbnail={post.meta.thumbnail} content={post.contentHtml} publishDate={new Date(post.meta.publishDate)}/>
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
    post (slug: {eq: $slug}) {
        slug
        contentHtml
        series {
            slug
        }
        meta {
            title
            thumbnail
            publishDate
        }
    }
}
`