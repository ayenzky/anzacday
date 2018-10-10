import React from 'react'
/*import PropTypes from 'prop-types'*/
import 'Bootstrap/dist/css/bootstrap.css'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Container} from 'react-bootstrap'
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import './layout.css'


export default ({children}) =>

  <StaticQuery
    query = { graphql`
      query siteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = {data => (
      <Container fluid className='p-0'>
        <Helmet
          title = {data.site.siteMetadata.title}
          meta ={[
            {name: 'description', content: 'anzac day commemoration committee'},
            {name: 'keywords', content: 'anzac day, history, education, commemoration'}
          ]}
        >
        <html lang="en" />
        </Helmet>
        <Header/>
        <Hero>About</Hero>
        <main>
        {children}
        </main>
        <Footer/>
      </Container>

    )}
    
  />