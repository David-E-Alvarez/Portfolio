import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import {StaticQuery, graphql} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)



export default function Blog(){
    return(     
        <>   
        <Header/>
        <div id="blog_div">
          <h1>Future Blog Page</h1>
        </div>
        </>
    )
}
