import React from 'react'
import { Link } from 'gatsby'
// import { render } from 'react-dom'
import Gallery from 'react-grid-gallery'
import Layout from '../components/layout'
import {Col, Row} from 'react-bootstrap'
import './pages.css'

const IMAGES =
[{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/1.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320,x_50/v1544420558/1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/2.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_crop,h_212,w_320,x_50,y_50/v1544420558/2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/3.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420558/3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/4.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420558/4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/5.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_crop,h_212,w_320,x_0,y_50/v1544420559/5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/6.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420558/6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/7.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420558/7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/8.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/9.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/10.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420558/10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/11.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/12.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/13.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420559/13.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/14.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420559/14.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/15.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/15.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/16.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/16.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/17.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420559/17.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/18.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420560/18.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/19.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420560/19.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420558/20.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420560/20.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/21.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_crop,h_212,w_320,x_0,y_12/v1544420584/21.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/22.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420584/22.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/23.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_crop,h_212,w_320,x_0,y_90/v1544420584/23.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/24.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420585/24.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/25.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420586/25.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/26.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420586/26.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/27.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420587/27.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/28.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420587/28.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/29.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_crop,h_212,w_320,x_40,y_40/v1544420588/29.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/30.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_320/v1544420588/30.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://res.cloudinary.com/da3oztzpf/image/upload/v1544420584/31.jpg",
        thumbnail: "https://res.cloudinary.com/da3oztzpf/image/upload/c_fill,h_212,w_320/v1544420589/31.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


export default () => (
  
  <Layout pageTitle='Photo Gallery' layoutClass='main-page'>
    <ul className='d-flex list-unstyled breadcrumbs mb-5'>
      <li className='bread-link'><Link to='/'>Home</Link></li>
      <li className='bread-link'><Link to='/photo-gallery'>Photo Gallery</Link></li>
    </ul>
    <Row>
    <Col xs={12}>
        <h2>Centenary of the Formation of Anzac Day Commemoration Committee</h2>
        <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        overflow: "auto"}}>
    <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true}/>
    </div>
    </Col>
    </Row>

  </Layout>
)