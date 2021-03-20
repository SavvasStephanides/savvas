import React from "react"
import { graphql } from 'gatsby'
import Layout from "../templates/layout"
import PostList from "../components/post-list"
import { Helmet } from "react-helmet"

export default function Home({data}) {
  const posts = data.allPost.nodes

  return <Layout highlightedLink="home">
    <Helmet>
      <title>Savvas Stephanides</title>
    </Helmet>
    <h1 className="serif-font">Latest posts</h1>
    <PostList posts={posts} />
  </Layout>
}

export const query = graphql`
{
  allPost(sort: {order: DESC, fields: meta___publishDate}) {
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