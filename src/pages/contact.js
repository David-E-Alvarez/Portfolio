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
                soon to be github icon
            </a>{" "}
            <a href="https://www.linkedin.com/in/david-e-alvarez/">
                <h4>soon to be linkedin icon</h4>
            </a>
        </div>
        </>
    )
}