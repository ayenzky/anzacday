import React from 'react'  
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UserTemplate = ({ data }) => (  
  <Layout pageTitle={data.strapiUsers.username}>
    <ul className='d-flex list-unstyled breadcrumbs mb-5'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      <li className='bread-link'><Link to={`/authors/${data.strapiUsers.id}`}>{data.strapiUsers.username}</Link></li>
    </ul>
    <ul className='list-unstyled'>
      {data.strapiUsers.article.map(post => (
        <li key={post.id}>
          <h3>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.shortdesc}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`  
  query UserTemplate($id: String!) {
    strapiUsers(id: { eq: $id }) {
      id
      username
      article {
        id
        title
        shortdesc
        slug
      }
    }
  }
`