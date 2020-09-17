import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import {StaticQuery, graphql} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)



export default function Blog({data}){//destructured query stuff(google it(js desctructure))
    const {edges} = data.allMarkdownRemark//edges is fancy word for stuff from down in query on line 25
    return(     
        <>   
        <Header/>
        <div id="blog_div">
          {edges.map(edge => {
            console.log("edge: ", edge)
            const {frontmatter} = edge.node
            return(
              <div key={frontmatter.path}>{frontmatter.date}: {frontmatter.title}</div>
            )
          })}
        </div>
        </>
    )
}

export const query = graphql`
  query PostsQuery{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ){
      edges{
        node{
          frontmatter{
            date
            title
          }
        }
      }
    }
  }
`

// render={data => <div>
//   {data.allMarkdownRemark.edges[1].node.frontmatter.date}{": "}
//   {data.allMarkdownRemark.edges[1].node.frontmatter.title}
//               </div>}