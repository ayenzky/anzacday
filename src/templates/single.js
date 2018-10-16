import React from 'react'  
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'



const PageTemplate = ({ data }) => {
    
    
    return (
      <Layout>
        {/*<ul className='d-flex list-unstyled'>
          <li className='mr-3'>Home</li>
          <li className='mr-3'>{data.strapiPages.parentPage === null ? <Link to={data.strapiPages.slug}>{data.strapiPages.Title}</Link> : <Link to={data.strapiPages.parentPage.slug}>{data.strapiPages.parentPage.Title}</Link>}</li>
          <li className={data.strapiPages.parentPage !== null ? "d-inline" : "d-none"}>{data.strapiPages.parentPage !== null ? <Link to={data.strapiPages.slug}>{data.strapiPages.Title}</Link> : ''}</li>
        </ul>*/}
        <ul className='d-flex list-unstyled'>
          <li>Home</li>
          <li className='mr-3'>{data.strapiPages.parentPage === null ? data.strapiPages.Title : data.strapiPages.parentPage.Title}</li>
          <li className='mr-3'>{data.strapiPages.parentPage === null ? data.strapiPages.Title : data.strapiPages.parentPage.Title}</li>
          <li className='mr-3'>{data.strapiPages.parentPage === null ? data.strapiPages.Title : data.strapiPages.parentPage.Title}</li>
          <li>{data.strapiPages.subPages === null ? data.strapiPages.Title : data.strapiPages.Title}</li>
        </ul>
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
  }
`