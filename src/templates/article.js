import React from 'react'  
import { Link, graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (  
  <Layout>
    <h1>{data.strapiArticles.title}</h1>
    <p>by <Link className='text-capitalize' to={`/authors/${data.strapiArticles.author.id}`}>{data.strapiArticles.author.username}</Link></p>
    <ReactMarkdown source={data.strapiArticles.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`  
  query ArticleTemplate($slug: String!) {
    strapiArticles(slug: {eq: $slug}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`