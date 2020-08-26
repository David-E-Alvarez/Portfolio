import React from "react"
import Header from '../components/header.js'
import "../styles/global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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