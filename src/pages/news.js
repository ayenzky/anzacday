import React from 'react'  
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (  
  <Layout>
    <ul className='list-unstyled'>
      {data.allStrapiArticles.edges.map(document => (
      <li key={document.node.id}>
        <h2>
          <Link to={`/${document.node.id}`}>{document.node.title}</Link>
        </h2>
        <p>{document.node.shortdesc}</p>
      </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
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