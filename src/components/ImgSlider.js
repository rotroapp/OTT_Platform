import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderimg1 from '../assets/slider-badag.jpg'
import sliderimg2 from '../assets/slider-badging.jpg'
import sliderimg3 from '../assets/slider-scale.jpg'
import sliderimg4 from '../assets/slider-scales.jpg'

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
 return (
    <Carousel {...settings}>
    <Wrap><a>
    <img src={sliderimg1} />

    </a></Wrap>
    <Wrap><a>
    <img src={sliderimg2} />
    </a></Wrap>
    <Wrap><a>
    <img src={sliderimg3} />
    </a></Wrap>
    <Wrap><a>
    <img src={sliderimg4} />
    </a></Wrap>
    </Carousel>
 )
}

const Wrap = styled.div`
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      
       & > a {
          padding: 4px;
          position: relative;
          border-radius: 4px;
          -webkit-box-shadow: 0px 54px 31px -22px rgba(0,0,0,0.89);
          -moz-box-shadow: 0px 54px 31px -22px rgba(0,0,0,0.89);
          box-shadow: 0px 54px 31px -22px rgba(0,0,0,0.89);          
          padding: 7px;
          display: block;

          & > img {
            width : 100%;
            height: 100%;
          }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 30ms;
                 }
        }
`
const Carousel = styled(Slider)`
  z-index: 2;
  top: 120px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 2;
    &:hover {
        opacity: 1;
      }
    }
    
    & > ul  > li > button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
                  }
       }

      li.slick-active button:before {
        color: white;
      }

      .slick-list {
        overflow: initial;
      }

      .slick-prev {
        left: -65px;
      }

      .slick-next {
        right: -65px;
      }
    
`
export default ImgSlider;