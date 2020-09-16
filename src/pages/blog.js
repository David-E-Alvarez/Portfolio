import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import {StaticQuery, graphql} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)



export default function Blog({data}){
    const {edges} = data.allMarkdownRemark
    console.log('---->',edges)
    return(     
        <>   
        <Header/>
        <div id="blog_div">
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return(
                    <div key={frontmatter.path}>{frontmatter.title}</div>
                )
            })}
        </div>
        </>
    )
}

export const query = graphql`
    query postsQuery{
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                  path
                }
              }
            }
          }
    }
`