import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import PostList from "../components/post-list";

export default function Post({data}) {
    const posts = data.allPost.nodes
    
    return <Layout highlightedLink={posts[0].series.slug}>
        <Helmet>
          <title>{posts[0].series.title} - Savvas Stephanides</title>
        </Helmet>

        <h1 className="serif-font">{posts[0].series.title}</h1>

        <PostList posts={posts}/>
        
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
  allPost(sort: {order: ASC, fields: meta___publishDate}, filter: {series: {slug: {eq: $slug}}}) {
    nodes {
      slug
      title
      id
      series {
        slug
        title
      }
      meta {
        title
        thumbnail
        publishDate
      }
    }
  }
}
`