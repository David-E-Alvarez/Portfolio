import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"

export default function About(){
    return(     
        <>   
        <Header/>
        <div id="about_div">
            <h1>About Me</h1>
            <p>
                Made in California. CSU Monterey Bay graduate. Reader. Thinker. Dreamer. Yogi. Healthy. Lover. 
            </p>
            <h3>My Work</h3>
        </div>
        </>
    )
}