import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

export default function Contact(){
    return(
        <>
        <Header/>
        <div id="contact_div">
            <a target="_blank" href="https://www.linkedin.com/in/david-e-alvarez/">
                <FontAwesomeIcon size="3x" icon={['fab','linkedin'] }/>
            </a>
        </div>
        </>
    )
}