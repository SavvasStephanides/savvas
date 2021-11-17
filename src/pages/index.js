import React from "react"
import { graphql } from 'gatsby'
import Layout from "../templates/layout"
import PostList from "../components/post-list"
import { Helmet } from "react-helmet"
import "../style/homepage.css"

export default function Home({data}) {

  let postListSections = [
    {
      id: "explained",
      title: "Dev, Explained",
      description: `Explainers, praised by developers worldwide, get rid of the tech jargon to offer clean and friendly explanations of various development-related topics!`,
      seriesUrl: "/explained"
    },
    {
      id: "tips",
      title: "Quick tips",
      description: "One minute tips for the curious yet busy developer!",
      seriesUrl: "/tips"
    },
    {
      id: "reviews",
      title: "Website reviews",
      seriesUrl: "/reviews"
    }
  ]

  return <Layout highlightedLink="home">
    <Helmet>
      <title>Savvas Stephanides</title>
    </Helmet>

    <section id="hero">
      <div className="text">
        <h1 className="serif-font title">Hello!</h1>
        <div className="sans-serif-font description">
        You are a curious developer, always trying to learn and get better. If you agree with this statement, welcome! 
        From quick one minute <a href="/tips">tips</a>, website <a href="/reviews">reviews</a>, to <a href="/explained">jargon-free explainers</a> of various topics praised by developers <em>worldwide</em> for their simplicity, you'll feel right at home here!  
        </div>
      </div>
      <div className="profilepic">
        <img src="/assets/me.jpg" alt=""/>
      </div>
    </section>

    {
      postListSections.map((section) => {
        return <section className="post-list-section">
        <h2 className="serif-font">{section.title}</h2>
        <div className="description sans-serif-font" dangerouslySetInnerHTML={{__html: section.description}}></div>
        <PostList posts={data[section.id].nodes} />

        <div className="more-link sans-serif-font"><a href={section.seriesUrl}>More</a></div>
      </section>
      })
    }
  </Layout>
}

export const query = graphql`
{
  latest: allPost(sort: {order: DESC, fields: meta___publishDate}, limit: 2) {
    nodes {
      id
      slug
      series {
        details {
          slug
          title
        }
      }
      meta {
        title
        series
        thumbnail
      }
    }
  }
  tips: allPost(sort: {order: DESC, fields: meta___publishDate}, limit: 4, filter: {series: {details: {slug: {eq: "tips"}}}}) {
    nodes {
      id
      slug
      series {
        details {
          slug
          title
        }
      }
      meta {
        title
        series
        thumbnail
      }
    }
  }
  explained: allPost(sort: {order: DESC, fields: meta___publishDate}, limit: 6, filter: {series: {details: {slug: {eq: "explained"}}}}) {
    nodes {
      id
      slug
      series {
        details {
          slug
          title
        }
      }
      meta {
        title
        series
        thumbnail
      }
    }
  }

  reviews: allPost(sort: {order: DESC, fields: meta___publishDate}, limit: 6, filter: {series: {details: {slug: {eq: "reviews"}}}}) {
    nodes {
      id
      slug
      series {
        details {
          slug
          title
        }
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