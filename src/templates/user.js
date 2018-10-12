// import React from 'react'  
// import { Link, graphql } from 'gatsby'
// import Layout from '../components/layout'

// const UserTemplate = ({ data }) => (  
//   <Layout>
//     <h1>{data.strapiUsers.username}</h1>
//     <ul className='list-unstyled'>
//       {data.strapiUsers.posts.map(post => (
//         <li key={post.id}>
//           <h3>
//             <Link to={`/${post.id}`}>{post.title}</Link>
//           </h3>
//           <p>{post.content}</p>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// export default UserTemplate

// export const query = graphql`  
//   query UserTemplate($id: String!) {
//     strapiUsers(id: { eq: $id }) {
//       id
//       username
//       posts {
//         id
//         title
//         shortdesc
//       }
//     }
//   }
// `