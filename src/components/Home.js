import styled from "styled-components";
import bgim from  '../assets/home-background.png'
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebaseconfig";
import { movieSliceaction } from "../Store/movies-slice";


const Home = (props) => {

    const dispatch = useDispatch();
    const userselect = useSelector((state) => state.ui.name)

    
    useEffect(() => {
        console.log("hello");
        let recommends = [];
        let newDisney = [];
        let originals = [];
        let trending = [];

            db.collection('Movies').onSnapshot((snapshot) => {

                snapshot.docs.map((doc) => {
                    switch (doc.data().type) {
                        case 'recommend':
                            recommends = [...recommends ,{id: doc.id, ...doc.data()}];
                            console.log('recom running' , recommends)
                            break;
                        
                        case 'new':
                            newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
                            break;
        
                        case 'original':
                            originals = [...originals, {id: doc.id, ...doc.data()}]
                            break;
        
                        case 'trending':
                            trending = [...trending, {id: doc.id, ...doc.data()}]
                            break;
                    }
                });
            
                console.log('here is recommends' , recommends)
                dispatch(movieSliceaction.setMovies(
                    {
                        recommended : recommends,
                        originals : originals,
                        newdisney : newDisney,
                        trending : trending
                    }
                ));
            });
    },[userselect]);

    return(
        <Container>
          <ImgSlider></ImgSlider>
          <Viewers></Viewers>
          <Recommended></Recommended>
          <NewDisney></NewDisney>
          <Originals></Originals>
          <Trending></Trending>
        </Container>

    )
} 

const Container = styled.main`
    
    min-height: 100vh;
    top: 72px;
    display: block;
    overflow-x: hidden;
    position: absolute;
    padding: 0 calc(3.5vw + 5px);
    width: 100%;
        background: url(${bgim}) ;
        background-size: cover;
        background-repeat: no-repeat;   
        inset: 0;
        opacity: 1;
        z-index: -1;  
`
export default Home;