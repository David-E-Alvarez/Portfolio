import React from 'react'
import {graphql} from 'gatsby'

const BlogPostTemplate = (props) => {
    console.log("props: ", props)
    const html = props.data.markdownRemark.html
    return (
        <div>
            <div className='blogpost'
                dangerouslySetInnerHTML={{__html:html}}
            />
        </div>
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