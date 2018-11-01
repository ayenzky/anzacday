import React from 'react'  
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import breadcrumbHelper from '../components/breadcrumb/helper'
import './single.css'


const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    return (
      <Layout pageTitle={data.strapiPages.title} layoutClass='main-page'>
          <Helmet
          title = {data.strapiPages.title +" - "+ data.site.siteMetadata.title}
          meta ={[
            {name: 'description', content: 'anzac day commemoration committee'},
            {name: 'keywords', content: 'anzac day, history, education, commemoration'}
          ]}
          >
          <html lang="en" />
          </Helmet>
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