import React from "react"
import Header from "./header.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function Layout({children}){
  return(
    <>
    <Header>
      <div>
      {children}
      </div>
    </Header>
    </>
  )
}