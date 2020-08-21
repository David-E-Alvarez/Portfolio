import React from "react"
import {Link} from "gatsby"
import "./layout.css"

const ListLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({children}){
  return(
    <div>
      <ul style={{listStyle: `none`, float: `right`}}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      {children}
    </div>
  )
}