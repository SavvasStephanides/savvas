import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import PostList from "../components/post-list";

export default function Post({data}) {
    const posts = data.allPost.nodes
    
    return <Layout>
        <Helmet>
          <title>Series - Savvas Stephanides</title>
        </Helmet>

        <h1>{posts[0].series.title}</h1>

        <PostList posts={posts}/>
        
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
  allPost(filter: {series: {slug: {eq: $slug}}}) {
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