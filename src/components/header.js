import React from 'react';
import { Link } from "gatsby"

export default function Header(props){
  return(
    <div style={{border: `2px solid red`}}>
      <h1>
        <Link to="/" style={{
          color: `black`,
          textDecoration: `none`,
        }}>David_E_Alvarez
        </Link>
      </h1>
      <nav>
        <ul>
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