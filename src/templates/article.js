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
    <Layout pageTitle={data.strapiArticles.title} layoutClass='main-page'>
      <Breadcrumb breadData={breadcrumbData} title='ANZAC News' slug='anzac-news'/>
      <p>by <Link className='text-capitalize' to={`/authors/${data.strapiArticles.author.id}`}>{data.strapiArticles.author.username}</Link></p>
      <ReactMarkdown escapeHtml={false} source={data.strapiArticles.content} />
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
      tag {
        id
        name
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
          tag {
            id
            name
          }
        }
      }
    }
  }
`