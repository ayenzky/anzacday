import React from 'react'  
import { Link, graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import breadcrumbHelper from '../components/breadcrumb/helper'

const ArticleTemplate = ({ data }) => {
  var breadcrumbData = breadcrumbHelper.helper2(data);
  // console.log(breadcrumbHelper.helper2)
  return (  
    <Layout pageTitle={data.strapiArticles.title}>
      <Breadcrumb breadData={breadcrumbData} title='News' slug='/news'/>
      <p>by <Link className='text-capitalize' to={`/authors/${data.strapiArticles.author.id}`}>{data.strapiArticles.author.username}</Link></p>
      <ReactMarkdown source={data.strapiArticles.content} />
    </Layout>
  )

}

export default ArticleTemplate

export const query = graphql`  
  query ArticleTemplate($slug: String!) {
    strapiArticles(slug: {eq: $slug}) {
      id
      title
      content
      slug
      author {
        id
        username
      }
    }
    allStrapiArticles {
      edges {
        node {
          id
          slug
          title
          shortdesc
          date
          content
          author {
            id
            username
          }
          
        }
      }
    }
  }
`