import React from 'react'
import {graphql, Link} from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import {FacebookProvider, Page} from 'react-facebook'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../components/layout'
import './index.css'
import Search from "../components/Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `News`, hitComp: `PostHit` },
]

const IndexPage = ({data}) => (
  <Layout>
      <section id="welcome">
        <Container>
          <Row>
            <Col md={8} sm={6}>
              <Search collapse indices={searchIndices} />
              <div data-aos="fade-right" data-aos-once="true" className="content py-7 pt-4 aos-init aos-animate">
                <h1 className="heading-1 text-dark-brown">Welcome to the ANZAC Day Commemoration Committee</h1>
                <p>ABN 46 457 412 054</p>
                <p>“ANZAC” was the name given to a combined force of First Australian Imperial Force and New Zealand Army troops who landed on Turkey’s Gallipoli Peninsula at around dawn on Sunday, the 25th day of April, 1915, barely nine months after the outbreak of World War I.</p>
                <p>Galvanised by the example of courage and sacrifice demonstrated on that bloody battlefield, on the 10th day of January 1916 a public meeting of Brisbane citizens voted unanimously to establish the ANZAC Day Commemoration Committee to lay the groundwork for a nationwide, solemn day of public remembrance on the first anniversary of the landings.</p>
                <p>On every 25th day of April for the past 100 years, “ANZAC Day” has been observed in Australia and New Zealand, becoming an honoured and sacred institution along the way.</p>
                <p>This site includes a host of information about the origins of ANZAC Day, the Spirit of ANZAC and gives an overview of the conflicts in which Australian Defence Force personnel have served in times of war and peace.</p>
                <p>We hope you will find something of value in the following pages and that you will join with us in continuing the tradition of honouring ANZAC Day.</p>
                <p>Be sure to like us on <a href="https://www.facebook.com/anzacdaycommemorationcommitteeqld" target="_blank" rel="noopener noreferrer" title="facebook">Facebook</a></p>
                <p><a href="https://res.cloudinary.com/da3oztzpf/image/upload/v1554959299/AD_0306_ANZAC_DawnService_2019_p3.pdf" target="_blank" rel="noopener noreferrer" title="2019 Brisbane Dawn Service Programme">2019 Brisbane Dawn Service Programme</a> is available here.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <ul className="mb-0 d-flex flex-wrap" id="box-menu">
          
          <li data-aos="zoom-in" data-aos-duration="50" data-aos-once="true" className="bg-dark-brown aos-init aos-animate">
            <Link to="/current-catalogue" title="online shop">
              <LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753799/online-shop-icon.png" alt="online shop" height="53"/>Online Shop Including Catalogue
            </Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="100" data-aos-once="true" className="bg-light-brown aos-init aos-animate">
            <Link to="/about-us" title="about us"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753764/about-ADDC.png" alt="about ADCC" height="53"/>About the ADCC</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="200" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="/adcc-merchandise-for-schools" title="adcc merchandise"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753721/school.png" alt="school orders" height="53"/>School Orders and Information</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="300" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="/commemoration-activities" title="commemoration activities"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753681/commemoration.png" alt="graves" height="53"/>Graves &amp; Memorials Grants Program</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" className="bg-dark-brown aos-init">
            <Link to="/service-activities" title="services activities"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753532/services.png" alt="ANZAC Services" height="53"/>ANZAC Service Schedule and Guides</Link>
          </li>
          <li data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="bg-light-brown aos-init">
            <Link to="/the-spirit-of-anzac" title="spirit of ANZAC"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753248/spirit.png" alt="ANZAC traditions" height="53"/>ANZAC Traditions Facts &amp; Folklore</Link>
          </li>
        </ul>
    </section>
    <section id="war-identity-education">
        <div id="war-identity-img" className="d-none d-md-block"></div>
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
                  <li className="pr-3 pb-3"><LazyLoadImage effect="blur" className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752757/ec.jpg" width="25" height="25" alt="early childhood"/>Early Childhood</li>
                  <li className="pr-3 pb-3"><LazyLoadImage effect="blur" className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752829/primary.jpg" width="25" height="25" alt="primary"/>Primary</li>
                  <li className="pr-3 pb-0"><LazyLoadImage effect="blur" className="mr-2" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539752742/secondary.jpg" width="25" height="25" alt="secondary"/>Secondary</li>
                </ul>
                <p>There is also a brief description for each resource.</p>
                <p>The description will:</p>
                <ul className="pl-0 checked">
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
        <Container fluid>
          <Row>
          <Col md={`${10} mx-auto`}>
          <div className="intro">
            <h2>Latest News</h2>
          </div>
          <div className="content blog-list aos-init aos-animate">
            
            <Row>
              {data.allStrapiArticles.edges.map(document => (
                <Col md={6} lg={3} className="mb-4" key={document.node.id}>
                  <div className="blog-lead">
                    <div className="blog-lead-img">
                      <img className="img-fluid" src={document.node.featured_image.url} alt={document.node.title}/>
                    </div>
                    <div className="blog-lead-content mt-3">
                      <h4 className="mt-0"><Link to={`/${document.node.slug}`} title={document.node.title}>{document.node.title}</Link></h4>
                      <ul className="list-unstyled blog-list-created d-flex align-items-center justify-content-start">
                        <li className="text-capitalize"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753182/001-male.svg" alt="author icon"/><Link to={`/authors/${document.node.author.id}`} title={document.node.author.username}>{document.node.author.username}</Link></li>
                        <li><LazyLoadImage effect="blur" src="https://res.cloudinary.com/db6xmqefe/image/upload/v1539753206/002-clock-with-white-face.svg" alt="clock icon"/>{document.node.date}</li>
                      </ul>
                      <p>{document.node.shortdesc}</p>
                      <p className="readmore">
                        <Link to={`/${document.node.slug}`} title="read more">Read More<LazyLoadImage effect="blur" src="https://res.cloudinary.com/da3oztzpf/image/upload/v1544767976/arrow-pointing-to-right.svg" alt="arrow"/></Link>
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
              <Col md={6} lg={3} className="mb-4">
                <FacebookProvider appId="1499897476896631">
                  <Page href="https://www.facebook.com/anzacdaycommemorationcommitteeqld/" tabs="timeline" width="500" height="550" smallHeader="true" />
                </FacebookProvider>  
              </Col>
               <Col md={6} lg={3} className="mb-4">
                <div className="border text-center py-5 px-4 bg-dark-brown shadow text-white h-100 d-flex align-items-center">
                  <div className="content">
                    <h3 className="mt-4">WE ARE MOVING</h3>
                    <p>from the end of August 2019 our new premises will be at</p>
                    <p><strong>Unit 2<br/> 14 Boothby Street<br/> Kedron 4031</strong></p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          </Col>
          </Row>
        </Container>
      </section>
      <section id="anzac-day-student" className="section" style={{
        backgroundImage:'url(https://res.cloudinary.com/da3oztzpf/image/upload/v1545010806/bgimg.jpg)',
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
                <p className="learnmore d-flex"><Link to="/annual-anzac-day-ceremonies" title="Annual ANZAC Day Ceremonies">Annual ANZAC Day Ceremonies</Link></p>
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
          date(formatString: "D MMM YYYY")
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
