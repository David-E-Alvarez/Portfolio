import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"

export default function Contact(){
    return(
        <>
        <Header/>
        <div id="contact_div">
            <h1>Contact Me</h1>
            <a href="https://github.com/David-E-Alvarez">
                <i class="fab fa-github fa-3x"></i>
            </a>{" "}
            <a href="https://www.linkedin.com/in/david-e-alvarez/">
            <i class="fab fa-linkedin fa-3x"></i>
            </a>
        </div>
        </>
    )
}