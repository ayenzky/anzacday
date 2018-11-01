// import React from 'react'  
// import { Link, graphql } from 'gatsby'
// import Layout from '../components/layout'
// import {Row, Col} from 'react-bootstrap'


// const IndexPage = ({ data }) => ( 
//   <Layout>
//     <Row>
//       {data.allStrapiPages.edges.map(document => (
//         <Col xs={12} key={document.node.id}>
//           <div className='page-list'>
//           <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
//           </div>
//         </Col>
//       ))}
//     </Row>

//   </Layout>
// )

// export default IndexPage

// export const pageQuery = graphql`  
//   query PagesQuery {
//     allStrapiPages {
//     edges {
//       node {
//         id
//         title
//         slug
//         subPages {
//           id
//           title
//           content
//           slug
//         }
//       }
//     }
//   }
//   }
// `