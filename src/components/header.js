import React from 'react';
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header(props){
  return(
    <div>
      <nav>    
        <ul>
          <li>
            <Link to="/" id="Link">David_E_Alvarez</Link>
          </li>
          <li>
            <Link id="link_id" to="/about">About</Link>
          </li>
          <li>
            <Link id="link_id" to="/contact">Contact</Link>
          </li>
          <li>
            <Link id="link_id" to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  ) 
}