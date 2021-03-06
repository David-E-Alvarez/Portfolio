const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = (({graphql, actions}) => {
    const {createPage} = actions
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')

        resolve(
            graphql(
            `
                query{
                    allMarkdownRemark(
                        sort:{order:ASC, fields: [frontmatter___date]}
                    ){
                        edges{
                            node{
                                frontmatter{
                                    path
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                const posts = result.data.allMarkdownRemark.edges
                console.log("posts----->", posts)
                posts.forEach(({node}, index)=>{
                    const path = node.frontmatter.path
                    createPage({
                        path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path,
                            prev: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index+1].node
                        }
                    })
                    resolve()
                })
            })
        )
    })
})


