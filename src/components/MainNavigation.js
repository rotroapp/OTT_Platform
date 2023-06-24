import { styled } from "styled-components";
import logosrc from '../assets/logo.svg';
import home from '../assets/home-icon.svg';
import search from '../assets/search-icon.svg';
import watchlist from '../assets/watchlist-icon.svg';
import movies from '../assets/movie-icon.svg';
import series from '../assets/series-icon.svg';
import originals from '../assets/original-icon.svg';
import { auth, provider } from "../firebaseconfig";
import { sliceaction } from "../Store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {

const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
display:flex;
padding:0 36px;
height:70px;
background-color:#090b13;
align-items:center;
justify-content:space-between;
z-index:5;
`

const Logo = styled.img`
   width: 80px;
   margin-top: 8px;
   padding:0;
   max-height: 70px;
   font-size:0;
   display: inline-block;
`
const NavMenu = styled.div`
align-items: center;
position:relative;
display: flex;
flex-flow: row nowrap;
height: 100%;
margin:0px;
padding:0px;
justify-content:space-between;
margin-left: 80px;
margin-right:auto;
width:100%;
text-transform: uppercase;
@media (max-width:768px)
{
    display:none;
}

a {
    display: flex;
    align-items: center;
    padding:0px 12px;


img {
    height: 20px;
    width: 20px;
    min-width: 20px;
    margin-right: 0.3rem
}

span {
    color: rgb(249,249,249);
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding:2px 0px;
    white-space: nowrap;
    position:relative;
     
    &:before {
        content:"";
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 4px 4px;
        bottom:-6px;
        left:0px;
        right:0px;
        height:2px;
        position: absolute;
        opacity:0;
        transform-origin: left center;
        transform:scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
        visibility: hidden;
        width: auto;
       }
    }
  

  &:hover {
    span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
  }
}
`
const Login = styled.a`
      background-color: transparent;
      color: rgb(249,249,249);
      border : 1px solid #f9f9f9;
      padding : 8px 16px;
      letter-spacing: 1.5px;
      border-radius : 4px;
      transition: all 0.2s ease 0s;

      &:hover {
        background-color : #f9f9f9;
        color: #000;
        cursor:pointer;
        border-color: transparent;
      }
`

const UserImg = styled.img`

    width : 45px;
    height: 45px;
    border-radius: 50%;
    display : flex;
`

const DropDown = styled.div`
position: absolute; 
top: 3.2rem;
right: -0.9rem;
background-color : rgb(25, 25, 25);
border: 1px solid rgba(151,151,151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
text-transform: none;
letter-spacing: 2px;
padding : 8px;
font-size: 14px;
opacity: 0
`

const SignOut = styled.div`
   position: relative;
   height: 44px;
   width: 44px;
   cursor : pointer;
   display: flex;


   &:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration : 1s;
       } 
   }
`



 const dispatch = useDispatch();
 const username = useSelector((state) => state.ui.name);
 const userphoto = useSelector((state) => state.ui.photo);
 const navigation = useNavigate();



 const handleAuth = (event) => {
    event.preventDefault();
    if(!username)
    { 
    auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
        navigation('/home');
        console.log(result.user);
    }).catch((err) => {
        console.log(err.message);
    } )
    }
    else if(username){
         auth.signOut().then(() =>{
            dispatch(sliceaction.setUserLogoutDetail())
            navigation('/')
         }).catch(err => {
            alert(err.message)
         })
    }
 };

 useEffect(() => {
    auth.onAuthStateChanged( async(user) => {
         if(user)
         {     
            setUser(user);
         }
    })
},[username]);


 const setUser = (user) => {
    dispatch(
       sliceaction.setUserLoginDetail(
           {
               name : user.displayName,
               email : user.email,
               photo : user.photoURL
           }
       )
    )};




    const navMenu = <NavMenu>

    <a href="/home" >
           <img src={home} alt="home" />
       <span>
           Home
       </span>
    </a>
    <a href="/search" >
           <img src={search} alt="Search" />
       <span>
          Search
       </span>
    </a>
    <a href="/watchlist" >
           <img src={watchlist} alt="Watchlist" />
       <span>
       Watchlist
       </span>
    </a>
    <a href="/originals" >
           <img src={originals} alt="Originals" />
       <span>
       Originals
       </span>
    </a>
    <a href="/movies" >
           <img src={movies} alt="Movies" />
       <span>
       Movies
       </span>
    </a>
    <a href="/series" >
           <img src={series} alt="Series" />
       <span>
       Series
       </span>
    </a>
      <SignOut>
        <UserImg src={userphoto}></UserImg>
        <DropDown><span onClick={handleAuth}>SignOut</span>
        </DropDown>
      </SignOut>
   </NavMenu>

    return (
        <Nav>
            <Logo src={logosrc} alt="Disney+"></Logo>
            { 
            !username ? (<Login onClick={handleAuth}>LOGIN</Login>) : 
            (<>
             {navMenu}
            </>)     
            }
        </Nav>
    )
}
export default Header;