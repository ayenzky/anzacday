import React from 'react'  
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UserTemplate = ({ data }) => (  
  <Layout>
    <h1 className='text-capitalize'>User: {data.strapiUsers.username}</h1>
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