import React from "react"
import Header from "./header.js"

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