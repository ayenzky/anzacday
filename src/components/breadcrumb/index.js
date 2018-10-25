import React from 'react'  
import { Link } from 'gatsby'
import './index.css'


export default ({breadData, title, slug}) => {
  console.log(breadData)
  return (
    <ul className='d-flex list-unstyled breadcrumbs mb-5'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      {breadData.map(d => (
        <li key={d.id} className='bread-link'>
          <Link to={`/${d.slug}`}>{d.title}</Link>
        </li>
      ))}
    </ul>

  )

}
   