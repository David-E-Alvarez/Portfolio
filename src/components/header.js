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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  ) 
}