import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

export default function About(){
    return(     
        <>   
        <Header/>
        <div id="about_div">
            <p>
                Made in California. CSU Monterey Bay graduate. Current Lambda School student. Reader. Thinker. Dreamer. Yogi. Healthy. Lover. 
            </p>
            <a target="_blank" href="https://github.com/David-E-Alvarez">
                <FontAwesomeIcon size="3x" icon={['fab','github'] }/>
            </a>
        </div>
        </>
    )
}