import React from 'react'  
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import breadcrumbHelper from '../components/breadcrumb/helper'


const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    return (
      <Layout pageTitle={data.strapiPages.Title}>
          <Breadcrumb breadData={breadcrumbData}/>
          <ReactMarkdown source={data.strapiPages.Content} />    
      </Layout>

    )
}

export default PageTemplate

export const query = graphql`  
  query PageTemplate($slug: String!) {
    strapiPages(slug: {eq: $slug}) {
      id
      Title
      Content
      slug
      subPages {
        id
        Title
        Content
        slug
      }
      parentPage {
        id
        Title
        slug
      }
    }
    allStrapiPages {
      edges {
        node {
          id
          Title
          slug
          parentPage {
            id
            Title
            slug
          }
          subPages {
            id
            Title
            slug
          }
        }
      }
    }
  }
`