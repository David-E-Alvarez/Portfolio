import React from 'react'
import {graphql} from 'gatsby'
import "../styles/global.css"
import Header from '../components/header.js'

const BlogPostTemplate = (props) => {
    console.log("props: ", props)
    const html = props.data.markdownRemark.html
    return (
        <>
        <Header/>
        <div>
            <div className='blogpost'
                dangerouslySetInnerHTML={{__html:html}}
            />
        </div>
        </>
    )
}

export const query = graphql`
    query($pathSlug: String!){
        markdownRemark(frontmatter: {path:{eq: $pathSlug}}){
            html
        }
    }
`

export default BlogPostTemplate