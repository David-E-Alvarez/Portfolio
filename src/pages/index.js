import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


const IndexPage = () => {
  return(
    <div>
      <Header/>
      <p id="title">aspiring software engineer</p>
    </div>
  )
}

export default IndexPage
