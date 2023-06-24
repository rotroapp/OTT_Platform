import { styled } from "styled-components";
import view1 from "../assets/viewers-disney.png";
import view2 from '../assets/viewers-pixar.png';
import view3 from '../assets/viewers-marvel.png';
import view4 from '../assets/viewers-national.png';
import view5 from '../assets/viewers-starwars.png';
import clip1 from "../videos/1564674844-disney.mp4"
import clip2 from "../videos/1564676115-marvel.mp4"
import clip3 from "../videos/1564676296-national-geographic.mp4"
import clip4 from "../videos/1564676714-pixar.mp4"
import clip5 from "../videos/1608229455-star-wars.mp4"

const Viewers = () => {
const Container = styled.div`
    margin-top: 150px;
    padding: 30px 0px 26px;
    width: 100%;

    display: grid;
    gap: 25px;
    
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width : 768px)
    {
     grid-template-columns: repeat(1, minmax(0, 1fr));
    }
 ` 
 const Wrap = styled.div`
    
        border-radius: 18px;
        box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
        rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        padding: 40% 0;
        cursor: pointer;
        position: relative;
        transition: all 250mx cubic-bezier(0.25, 0.46, 0.45, 0.63) 0s;
        border: 3px solid rgba(249,249,249,0.1);
        z-index: 2;
        img {
            inset: 0px;
            display: block;
            height: 100%;
            object-fit:cover;
            width: 100%;
            opacity: 1;
            position: absolute;
            transition: opacity 250ms ease-out 0ms;
        }
          
        video {
            position: absolute;
            border-radius: 18px;
            top: 0;
            width : 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            z-index: -1;
        }

        &: hover {
        box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
        rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        opacity: 1;
        transform : Scale(1.05);
        border-color: rgba(249,249,249, 0.9);

            video {
                opacity : 1;
            }
        }
 `

   return ( 
       <Container>
        <Wrap><img src={view1}></img>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={clip1} type='video/mp4'></source>
        </video>
        </Wrap>
        <Wrap><img src={view2}></img>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={clip4} type='video/mp4'></source>
        </video>
        </Wrap>
        <Wrap><img src={view4}></img>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={clip3} type='video/mp4'></source>
        </video>
        </Wrap>
        <Wrap><img src={view3}></img>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={clip2} type='video/mp4'></source>
        </video>
        </Wrap>
        <Wrap><img src={view5}></img>
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={clip5} type='video/mp4'></source>
        </video>
        </Wrap>
       </Container>
   )

  

}

export default Viewers;