import React from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'
// import Slide_1600w from '../../images/slide4-1600w.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Match } from "@reach/router"
import styl from './index.module.css'


// export default class Hero extends Component {
//   render () {
//     if (window.location.pathname === '/'){
//       return (
//         <div className='hero'>
//           <Media>
//             <img className='w-100 mb-0' src='https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_414/v1538371271/slide.jpg' 
//             srcSet='https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_414/v1538371271/slide.jpg 414w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_568/v1538371271/slide.jpg 568w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_667/v1538371271/slide.jpg 667w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_767/v1538371271/slide.jpg 767w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_823/v1538371271/slide.jpg 823w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_1366/v1538371271/slide.jpg 1366w,
//                       https://res.cloudinary.com/db6xmqefe/image/upload/c_scale,w_1600/v1538371271/slide.jpg 1600w' alt=''/>
//           </Media>
//         </div>
//       )
//     }
//     else {
//       return (
//         <div className='hero-main'>
//           <Container>
//             <Row>
//               <Col sm={8} md={7}>
//                 <h1 className='titlepage'>{this.props.children}</h1>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       )
//     }
//   }
// }
const Hero = ({children}) => (
  <Match path="/">
    {props =>
      props.match ? (
        <div className='hero'>
          <Media>
            <LazyLoadImage effect="blur" className='w-100 mb-0' src='https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_414/v1544776966/slide.jpg' 
            srcSet='https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_414/v1544776966/slide.jpg 414w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_568/v1544776966/slide.jpg 568w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_667/v1544776966/slide.jpg 667w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_767/v1544776966/slide.jpg 767w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_823/v1544776966/slide.jpg 823w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_1366/v1544776966/slide.jpg 1366w,
                      https://res.cloudinary.com/da3oztzpf/image/upload/c_scale,w_1600/v1544776966/slide.jpg 1600w' alt='ANZAC banner'/>
          </Media>
        </div>
      ) : (
        <div className={styl.heroMain}>
          <Container>
            <Row>
              <Col sm={8} md={7}>
              <h1>{children}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  </Match>

)
export default Hero


