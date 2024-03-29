const fs = require("fs")
const showdown  = require('showdown')

const series = require("./src/posts/series.json")

const converter = new showdown.Converter({metadata: true})

exports.sourceNodes = async (graphql)=>{
    const posts = getPostsFromFiles()
    storePostsInGraphQL(graphql, posts)
    storeSeriesInGraphQL(graphql, series)
}

exports.createPages = async({actions, graphql}) => {
    await createPages(actions,graphql)
}

function getPostsFromFiles(){
    const postFiles = fs.readdirSync("./src/posts")
        .filter(file => file.endsWith(".md"))
        .filter(file => !file.startsWith("_"))
    
    const posts = postFiles.map((file) => {
        var content = fs.readFileSync("./src/posts/" + file, "utf-8")
        
        let html = converter.makeHtml(content)
        html = html.replaceAll("..AD..", `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2194018182042050"
            data-ad-slot="9821661269"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`)

        return {
            slug: file.replace(".md", ""),
            title: content.split("\r\n")[0].replace("# ", ""),
            contentHtml: html,
            meta: converter.getMetadata()
        }
    })

    return posts
}

function storePostsInGraphQL({ actions, createNodeId, createContentDigest }, posts){
    posts.forEach(post => {
        const node = {
            id: createNodeId(`Post-${post.slug}`),
            slug: post.slug,
            title: "The title",
            contentHtml: post.contentHtml,
            series: {
                details: series.find(s => s.slug === post.meta.series),
                posts: posts.filter(p => p.meta.series === post.meta.series)
            },
            meta: post.meta,
            internal: {
                type: "Post",
                contentDigest: createContentDigest(post)
            }
        }

        actions.createNode(node)
    })
}

function storeSeriesInGraphQL({ actions, createNodeId, createContentDigest }, series){
    series.forEach(seriesItem => {
        const node = {
            id: createNodeId(`Series-${seriesItem.slug}`),
            slug: seriesItem.slug,
            title: seriesItem.title,
            headerLinkOrder: seriesItem.headerLinkOrder,
            internal: {
                type: "Series",
                contentDigest: createContentDigest(seriesItem)
            }
        }

        actions.createNode(node)
    })
}

async function createPages(actions, graphql){
    const {data} = await graphql(`
    {
        allPost {
          nodes {
              slug
              meta{
                  series
              }
          }
        }
        allSeries {
          nodes {
            slug
            title
          }
        }
      }
      
    `)

    data.allSeries.nodes.forEach((seriesItem) => {
        actions.createPage({
            path: `/${seriesItem.slug}`,
            component: require.resolve(`./src/templates/series.js`),
            context: {
                slug: seriesItem.slug
            }
        })
    })
    data.allPost.nodes.forEach((post) => {
        actions.createPage({
            path: `/${post.meta.series}/${post.slug}`,
            component: require.resolve(`./src/templates/post.js`),
            context: {
                slug: post.slug
            }
        })
    })
}