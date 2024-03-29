import React from 'react'  
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {Row, Col} from 'react-bootstrap'
import './anzac-news.css'
import './pages.css'


const IndexPage = ({ data }) => (  
  <Layout pageTitle='ANZAC News'>
    <ul className='d-flex list-unstyled breadcrumbs mb-5'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      <li className='bread-link'><Link to='/anzac-news'>ANZAC News</Link></li>
    </ul>
    <Row>
      {data.allStrapiArticles.edges.map(document => (
        <Col xs={12} key={document.node.id}>
          <div className='news-item'>
          <h2><Link to={`/${document.node.slug}`}>{document.node.title}</Link></h2>
          <ul className='list-unstyled d-flex'>
            <li className='mr-3'>By: <Link className='text-capitalize' to={`/authors/${document.node.author.id}`}>{document.node.author.username}</Link></li>
            <li>Published: {document.node.date}</li>
          </ul>
          <p>{document.node.shortdesc}</p>
          <div className='learnmore d-flex justify-content-start mt-0'>
            <Link className='bg-light-brown' to={`/${document.node.slug}`}>Read More</Link>
          </div>
          </div>
        </Col>
      ))}
    </Row>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          shortdesc
          content
          date(formatString: "D MMM YYYY")
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
      }
    }
  }
`