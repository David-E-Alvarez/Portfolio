import React from "react"
import Header from "./header.js"

export default function Layout({children}){
  console.log("hhheeeeeyyyyy!")
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