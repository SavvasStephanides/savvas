import React from "react"
import Layout from "../templates/layout"
import PostList from "../components/post-list"
import { Helmet } from "react-helmet"

export default function Home({data}) {

  return <Layout highlightedLink="home">
    <Helmet>
      <title>Savvas Stephanides</title>
    </Helmet>
    <section id="hero">
        <h1 className="serif-font">Hello</h1>
        <div>
            My name is Savvas. I write about software development, I explain dev concepts in a straight-forward jargon-free way,
            and provide quick tips for you to be a better developer.
        </div>
    </section>

    
    
    
  </Layout>
}