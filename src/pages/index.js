import React from "react"
import { graphql } from 'gatsby'
import Layout from "../templates/layout"
import PostList from "../components/post-list"
import { Helmet } from "react-helmet"

export default function Home({data}) {
  const posts = data.allPost.nodes

  return <Layout>
    <Helmet>
      <title>Savvas Stephanides</title>
    </Helmet>
    <PostList posts={posts} />
  </Layout>
}

export const query = graphql`
{
  allPost {
    nodes {
      id
      slug
      contentHtml
      series{
        slug
        title
      }
      meta {
        title
        series
        thumbnail
      }
    }
  }
}

`