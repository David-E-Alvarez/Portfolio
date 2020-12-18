import React from 'react'
import {graphql, Link} from 'gatsby'
import "../styles/global.css"
import Header from '../components/header.js'

const BlogPostTemplate = ({data,pageContext}) => {
    const {next,prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter
    const html = markdownRemark.html
    return (
        <>
        <Header/>
        <div>
            <div className='blogpost'
                dangerouslySetInnerHTML={{__html:html}}
            />
            {next &&
            <Link to={next.frontmatter.path}>
                Next
            </Link>
            }

            {prev &&
            <Link to={prev.frontmatter.path}>
                Previous
            </Link>
            }
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


// const BlogPostTemplate = (props) => {
//     const html = props.data.markdownRemark.html
//     return (
//         <>
//         <Header/>
//         <div>
//             <div className='blogpost'
//                 dangerouslySetInnerHTML={{__html:html}}
//             />
//         </div>
//         </>
//     )
// }