import React from 'react'
// import PropTypes from 'prop-types'
// import 'Bootstrap/dist/css/bootstrap.css'
import { Location } from '@reach/router'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import Sticky from 'react-sticky-el';
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'
import './layout.css'
import favicon from '../images/favicon.ico'

export default ({pageTitle, data, children, layoutClass}) =>

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
          title = {pageTitle ? pageTitle +" - "+ data.site.siteMetadata.title : data.site.siteMetadata.title}
          meta ={[
            {name: 'description', content: 'anzac day commemoration committee'},
            {name: 'keywords', content: 'anzac day, history, education, commemoration'}
          ]}
          link={[
            { rel: 'shortcut icon', type: 'img/x-icon', href: `${favicon}` }
          ]}
        >
        <html lang="en" />
        </Helmet>
        <Sticky className='sticky-wrapper' stickyClassName='is-sticky'><Header/></Sticky>
        <Hero>{pageTitle}</Hero>
        <main className={layoutClass}>
        <Location>
          {({ location }) => {
            return (
               <div className={location.pathname === '/' ? 'container-fluid' : 'container pt-9'}>
                  <Row className='align-items-start'>
                    <Col lg={location.pathname === '/' ? '12 p-0' : '8 mb-5'}>
                      {children}    
                    </Col>
                    <div className={location.pathname !== '/' ? 'col-md-12 col-lg-4 px-0 px-lg-3 pb-0 pb-lg-5' : 'd-none'}>
                      <Sidebar/>
                    </div>
                  </Row>
                </div>
            )
          }}
        </Location>
        
        </main>
        <Footer/>
      </Container>

    )}
    
  />