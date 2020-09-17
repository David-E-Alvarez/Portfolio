import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import {StaticQuery, graphql} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)



export default function Blog(data){
    console.log("data: ", data)
    return(     
        <>   
        <Header/>
        <div id="blog_div">
          <StaticQuery
            query={graphql`
              query{
                allMarkdownRemark{
                  edges{
                    node{
                      frontmatter{
                        title
                      }
                    }
                  }
                }
              }
            `}
            render={data => <div>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</div>}
          />
        </div>
        </>
    )
}
