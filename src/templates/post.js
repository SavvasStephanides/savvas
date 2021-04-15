import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import Article from "../components/article"

export default function Post({data}) {
    
    const post = data.post
    return <Layout highlightedLink={post.series.slug}>
        <Helmet>
          <title>{post.meta.title} - Savvas Stephanides</title>
        </Helmet>
        
        <Article post={post}/>
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
    post (slug: {eq: $slug}) {
        slug
        contentHtml
        series {
            details{
                slug
                title
            }
            posts {
                slug
                meta {
                  title
                  publishDate
                }
            }
        }
        meta {
            title
            thumbnail
            publishDate
        }
    }
}
`