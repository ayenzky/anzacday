import React from 'react'  
import { Link } from 'gatsby'
import styl from './index.module.css'

export default ({breadData, title, slug}) => {
  return (
    <ul className={styl.breadcrumbs + ' d-flex list-unstyled mb-5 flex-wrap'}>
      <li className={styl.breadLink}><Link to='/'>Home</Link></li>
      <li className={breadData[0].tag !== undefined ? styl.breadLink + ' d-inline' : 'd-none'}><Link to={slug !== undefined ? slug : '#'}>{title !== null ? title : 'na'}</Link></li>
      {breadData.map(d => (
        <li key={d.id} className={styl.breadLink}>
          <Link to={`/${d.slug}`}>{d.title}</Link>
        </li>
      ))}
    </ul>

  )

}
   