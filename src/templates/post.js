import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import Article from "../components/article"

export default function Post({data}) {
    
    const post = data.post
    return <Layout>
        <Helmet>
          <title>{post.meta.title} - Savvas Stephanides</title>
        </Helmet>
        
        <Article title={post.meta.title} thumbnail={post.meta.thumbnail} content={post.contentHtml} series={post.series}/>
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
    post (slug: {eq: $slug}) {
        slug
        contentHtml
        series {
            slug
            title
        }
        meta {
            title
            thumbnail
        }
    }
}
`