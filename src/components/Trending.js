import { styled } from "styled-components";
import imgr from "../assets/viewers-disney.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Trending = (props) => {

    const Container = styled.div`
    padding : 0 0 26px;
    `;

    const Content = styled.div`
     display: grid;
     grid-gap: 25px;
     gap: 25px;
     grid-template-columns: repeat(4, 1fr);
     @media (max-width: 768px)
     {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
     }
    `
    const Wrap = styled.div`
     padding-top: 55%;
     border-radius: 12px;
     box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
     rgb(0 0 0/ 73%) 0px 16px 10px -10px;
     border: 3px solid rgba(249, 249,249, 0.1);
     position: relative;
     cursor: pointer;
     overflow : hidden;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.62)0s; 
     img {
        top:0;
        inset:0px;
        position : absolute;
        height: 100%;
        width:100%;
        z-index: 5;
        transition: opacity 500ms ease-in-out 0s; 
        opacity: 1;
        
     }

     &: hover {
        transform: Scale(1.05);
        box-shadow: rgb(0 0 0/ 72%) 0px 40px 58px -17px,
        rgb(0 0 0/ 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249,249, 0.8);
    }
    `

    const movies = useSelector((state) => state.movie.trending);

      return (
        <Container>
            <h4>Trending</h4>
            <Content>
            {movies && movies.map((movie)=> (
            <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                 <img src={movie.cardImg} alt={movie.title}></img>
                </Link>
            </Wrap>
              ))}
            </Content>
        </Container>
      )
}

export default Trending;