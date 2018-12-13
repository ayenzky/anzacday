import React from 'react'  
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import breadcrumbHelper from '../components/breadcrumb/helper'
import './single.css'


const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    console.log(breadcrumbData)
    return (
      <Layout pageTitle={data.strapiPages.title} layoutClass='main-page'>
          <Breadcrumb breadData={breadcrumbData}/>
          <ReactMarkdown escapeHtml={false} source={data.strapiPages.content} />    
      </Layout>

    )
}

export default PageTemplate

export const query = graphql`  
  query PageTemplate($slug: String!) {
    strapiPages(slug: {eq: $slug}) {
      id
      title
      content
      slug
      subPages {
        id
        title
        content
        slug
      }
      parentPage {
        id
        title
        slug
      }
    }
    allStrapiPages {
      edges {
        node {
          id
          title
          slug
          parentPage {
            id
            title
            slug
          }
          subPages {
            id
            title
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`