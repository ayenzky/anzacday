import React from 'react'
import {graphql, Link} from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import { FacebookProvider, EmbeddedPost } from 'react-facebook'
import Layout from '../components/layout'
import './index.css'

const IndexPage = ({data}) => (
  <Layout>
      <section id="welcome">
        <Container>
          <Row>
            <Col md={8} sm={6}>
              <div data-aos="fade-right" data-aos-once="true" className="content py-7 aos-init aos-animate">
                <h1 className="heading-1 text-dark-brown">Welcome to the ANZAC Day Commemoration Committee</h1>
                <p>ABN 46 457 412 054</p>
                <p>“ANZAC” was the name given to a combined force of First Australian Imperial Force and New Zealand Army troops who landed on Turkey’s Gallipoli Peninsula at around dawn on Sunday, the 25th day of April, 1915, barely nine months after the outbreak of World War I.</p>
                <p>Galvanised by the example of courage and sacrifice demonstrated on that bloody battlefield, on the 10th day of January 1916 a public meeting of Brisbane citizens voted unanimously to establish the ANZAC Day Commemoration Committee to lay the groundwork for a nationwide, solemn day of public remembrance on the first anniversary of the landings.</p>
                <p>On every 25th day of April for the past 100 years, “ANZAC Day” has been observed in Australia and New Zealand, becoming an honoured and sacred institution along the way.</p>
                <p>This site includes a host of information about the origins of ANZAC Day, the Spirit of ANZAC and gives an overview of the conflicts in which Australian Defence Force personnel have served in times of war and peace.</p>
                <p>We hope you will find something of value in the following pages and that you will join with us in continuing the tradition of honouring ANZAC Day.</p>
                <p>Be sure to like us on&nbsp;<a href="https://www.facebook.com/anzacdaycommemorationcommitteeqld" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                <p>2018 Brisbane Dawn Service Programme available&nbsp;<a href="https://res.cloudinary.com/da3oztzpf/image/upload/v1540972010/c9s7cl4mie8ougzfdyoa.pdf">here</a></p>
              </div>
            </Col>
          </Row>
        </Container>
        <ul className="mb-0 d-flex flex-wrap" id="box-menu">
          <li data-aos="zoom-in" data-aos-duration="50" data-aos-once="true" className="bg-dark-brown aos-init aos-animate">
            <Link to="/current-catalogue"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753799/online-shop-icon.png" alt=""/>Online Shop Including Catalogue</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="100" data-aos-once="true" className="bg-light-brown aos-init aos-animate">
            <Link to="/about-us"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753764/about-ADDC.png" alt=""/>About the ADCC</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="200" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="/adcc-merchandise-for-schools"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753721/school.png" alt=""/>School Orders and Information</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="300" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="/commemoration-activities"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753681/commemoration.png" alt=""/>Graves &amp; Memorials Grants Program</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="/service-activities"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753532/services.png" alt=""/>ANZAC Service Schedule and Guides</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="/the-spirit-of-anzac"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753248/spirit.png" alt=""/>ANZAC Traditions Facts &amp; Folklore</Link>
          </li>
        </ul>
    </section>
    <section id="war-identity-education">
        <div id="war-identity-img"></div>
        <Container>
          <Row>
            <Col md={7} className="ml-md-auto aos-init aos-animate" data-aos="fade-left" data-aos-once="true">
              <div className="content">
                <h2>War &amp; Identity Education</h2>
                <p>The ADCC education site has a wealth of resources about Australia’s military history and heritage for teachers and students.</p>
                <p>These are at Early Childhood, Primary and Secondary levels.</p>
                <p>You can find what you are looking for by Themes, or Individual Wars.</p>
                <p>The list of relevant resources under the theme or war you select is colour-coded:</p>
                <ul className="list-unstyled d-flex legend flex-wrap">
                  <li className="pr-3 pb-3"><img className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752757/ec.jpg" width="25" alt=""/>Early Childhood</li>
                  <li className="pr-3 pb-3"><img className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752829/primary.jpg" width="25" alt=""/>Primary</li>
                  <li className="pr-3 pb-0"><img className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752742/secondary.jpg" width="25" alt=""/>Secondary</li>
                </ul>
                <p>There is also a brief description for each resource.</p>
                <p>The description will:</p>
                <ul className="list-unstyled checked">
                  <li>Indicate a summary of the contents</li>
                  <li>Indicate if it is a Queensland related resource</li>
                  <li>Advise whether it is a *classroom-ready unit, or an *interactive resource, or *supplementary information about the topic</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="latest-news" className="section">
        <Container>
          <div className="intro">
            <h2>Latest News</h2>
          </div>
          <div data-aos="fade-up" data-aos-once="true" className="content blog-list aos-init aos-animate">
            <Row>
              {data.allStrapiArticles.edges.map(document => (
                <Col md={4} sm={6} className="mb-4" key={document.node.id}>
                  <div className="blog-lead">
                    <div className="blog-lead-img">
                      <img className="img-fluid" src={document.node.featured_image.url} alt={document.node.title}/>
                    </div>
                    <div className="blog-lead-content mt-3">
                      <h4 className="mt-0"><Link to={`/${document.node.slug}`}>{document.node.title}</Link></h4>
                      <ul className="list-unstyled blog-list-created d-flex align-items-center justify-content-start">
                        <li className="text-capitalize"><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753182/001-male.svg" alt=""/><Link to={`/authors/${document.node.author.id}`}>{document.node.author.username}</Link></li>
                        <li><img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753206/002-clock-with-white-face.svg" alt=""/>{document.node.date}</li>
                      </ul>
                      <p>{document.node.shortdesc}</p>
                      <p className="readmore">
                        <Link to={`/${document.node.slug}`}>Read More<img src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753135/arrow-pointing-to-right.svg" alt=""/></Link>
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
              <Col md={4} sm={6} className="mb-4">
                
                <FacebookProvider appId="1499897476896631">
                  <EmbeddedPost href="http://www.facebook.com" width="500" />
                </FacebookProvider>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section id="anzac-day-student" className="section" style={{
        backgroundImage:'url(//res.cloudinary.com/dazemr1k4/image/upload/v1445928759/anzac/img/bgimg.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'}}>
        <Container>
          <Row>
            <Col md={9} className="mx-auto">
              <div className="content text-white text-center">
                <h3>The ANZAC Day Student Service</h3>
                <p>This solemn ceremony is conducted every year in Brisbane’s ANZAC Square prior to ANZAC Day from 10am and noon approximately. The 2016 event took place on Thursday, the 21st day of April, and several thousand Queensland school students took part.</p>
                <h3>The ANZAC Day Dawn Service</h3>
                <p>Every year on the 25th day of April, the ANZAC Day Dawn Service starts at 04:28am sharp at Brisbane’s Shrine of Remembrance, ANZAC Square, located between Ann and Adelaide Streets. All are welcome to attend.</p>
                <p className="learnmore d-flex"><Link to="/annual-anzac-day-ceremonies">Learn More</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query NewsQuery {
    allStrapiArticles(limit:2, sort: {fields: [date], order: ASC}) {
      edges {
        node {
          id
          featured_image {
            id
            url
          }
          title
          shortdesc
          date(formatString: "MMMM DD YYYY")
          slug
          author {
            id
            username
          }
        }
      }
    }
  }
`
