import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import PostList from "../components/post-list";

export default function Post({data}) {
    const posts = data.allPost.nodes
    const series = data.series

    return <Layout highlightedLink={series.slug}>
        <Helmet>
          <title>{series.title} - Savvas Stephanides</title>
        </Helmet>

        <h1 className="serif-font">{series.title}</h1>

        <PostList posts={posts}/>
        
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
  allPost(sort: {order: ASC, fields: meta___publishDate}, filter: {series: {details: {slug: {eq: $slug}}}}) {
    nodes {
      slug
      title
      id
      series {
        details {
          slug
          title
        }
      }
      meta {
        title
        thumbnail
        publishDate
      }
    }
  }
  series (slug: {eq: $slug}){
    slug
    title
  }
}

`