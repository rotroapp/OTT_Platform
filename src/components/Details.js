import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import playicon from '../assets/play-icon-black.png'
import trailericon from '../assets/play-icon-white.png'
import groupicon from '../assets/group-icon.png'
import db from "../firebaseconfig";
import { useState } from "react";
import { useEffect } from "react";


const Detail = (props) => {

const Container = styled.div`
min-height: calc(100vh - 250px);
position: relative;
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
position: fixed;
left: 0px;
opacity: 0.8;
right: 0px;
top: 0px;
  z-index: -1;
  img {
    width : 100%;
    height:100%;

    @media (max-width: 760px){
        width: intial;
    }
  }
`

const ImageTitle = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-start;
margin: 0 auto;
-webkit-box-pack: start;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`

const ContentMeta = styled.div`
max-width: 874px;
`

const Controls  = styled.div`
display:flex;
flex-flow: row nowrap;
align-items: center;
margin: 24px 0px;
min-height: 56px;
`

const Player = styled.a`
    padding: 0px 24px;
    font-size: 15px;
    background: rgb(249,249,249);
    margin: 0px 22px 0px 0px;
    color : black;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    letter-spacing: 1.8px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    text-transform: uppercase;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px)
    {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px; 
        }
    }
`

const Trailer = styled.a`
       front-size: 24px;
       background: rgb(0,0,0, 0.3);
       margin-right: 22px;
       padding: 0px 24px;
       height: 56px;
       border: 1px solid rgb(249, 249, 249);
       display: flex;
       justify-content: center;
       align-items: center;
       border-radius: 6px;
       letter-spacing: 1.8px;
       cursor: pointer;
       text-transform: uppercase;
       img{
             width: 32px;
       }

       &:hover {
         background: rgb(0,0,0, 0.8);
       }

       @media (max-width: 768px)
    {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px; 
        }
    }
`

const Addlist = styled.div`
   height: 44px;
   width: 44px;
   background: rgb(0,0,0, 0.6);
   margin-right: 16px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid rgb(249, 249, 249);
   cursor:pointer;

   span {
    background-color: rgb(249, 249, 249);
    display: inline-block;


    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
        
    }
    &:nth-child(2) {
        height: 16px;
        transform: translate(-8px, 0px) rotate(0deg);
        width: 2px;
    }
   }
`
const GroupWatch = styled(Addlist)`
    div {
        background: rgb(0,0,0);
        border-radius: 50%;
    }

    img {
        width: 100%;
    }
`

const SubTitle = styled.div`
color: rgb(249, 249. 249);
font-size: 15px;
min-height:20px;

@media (max-width: 768px){
font-size: 12px;
}
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
padding: 16px 0px;
color: rgb(249, 249. 249);

@media (max-width: 768px){
    font-size: 14px;
    }
`

const {id} = useParams();
const [getDetails, setDetails] = useState({});

    useEffect(() => {
        db.collection('Movies').doc(id).get().then((doc) => {
            if(doc.exists){
                setDetails(doc.data());
            }
            else{
                console.log("Nothing such exist in movies collection docs")
            }
        }).catch((err) => {
            console.log('Error getting document :', err)
        });
    },[id]);


    return (
        <Container>
            <Background>
             <img alt={getDetails.title} src= {getDetails.backgroundImg} />
            </Background>

            <ImageTitle>
                <img alt={getDetails.title} src={getDetails.titleImg}>
                </img>
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={playicon} alt={getDetails.title}></img>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={trailericon} alt={getDetails.title}></img>
                        <span>Trailer</span>
                    </Trailer>
                    <Addlist>
                        <span></span>
                        <span></span>
                    </Addlist>
                    <GroupWatch>
                        <div>
                        <img src={groupicon} alt={getDetails.title}></img>
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{getDetails.subTitle}</SubTitle>
                <Description>{getDetails.description}</Description>
            </ContentMeta>
        </Container>
    )
}


export default Detail;
