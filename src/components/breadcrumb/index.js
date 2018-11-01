import React from 'react'  
import { Link } from 'gatsby'
import './index.css'

export default ({breadData, title, slug}) => {
  console.log(breadData)
  return (
    <ul className='d-flex list-unstyled breadcrumbs mb-5 flex-wrap'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      <li className={breadData[0].tag !== undefined ? 'bread-link d-inline' : 'd-none'}><Link to={slug !== undefined ? slug : '#'}>{title !== null ? title : 'na'}</Link></li>
      {breadData.map(d => (
        <li key={d.id} className='bread-link'>
          <Link to={`/${d.slug}`}>{d.title}</Link>
        </li>
      ))}
    </ul>

  )

}
   