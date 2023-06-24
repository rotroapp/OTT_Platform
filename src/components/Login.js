import styled from "styled-components"
import imgback from '../assets/login-background.jpg'
import CTAone from '../assets/cta-logo-one.svg'
import CTAtwo from '../assets/cta-logo-two.jpg'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  top:0px;
  left:0;
  right:0;
  position: absolute;
  z-index: 0;
`

const Content = styled.div`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  z-index: -2;
`

const BgImage = styled.div`
background-image: url(${imgback});
height: 100%;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 0;
left: 0;
right: 0;

`
const CTA = styled.div`
max-width: 650px;
margin-bottom: 2vw;
flex-wrap: wrap;
display:flex;
flex-direction: column;
justify-content: center;
margin: 0px auto;
text-align: center;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width:100%

`
const CTAOne = styled.img`
   max-width: 600px;
   margin-bottom: 12px;
   min-height: 1px;
   width: 100%;
   display: block;
   z-index: 0;
`
const SignUp = styled.a`
   color: #f9f9f9;
   background-color: #0063e5;
   font-size: 18px;
   font-weight: bold;
   margin-bottom: 12px;
   padding: 1.4rem 0px;
   width: 600px;
   border: 1px solid transparent;
   letter-spacing: 1.5px;
   border-radius: 4px;
   z-index: 0;

  &:hover {
    & {
        background-color: #0483ee;
       }
    }
`
const Description = styled.p`
max-width: 600px;
padding: 5px 20px;
line-height: 1.5;
font-size: 0.9rem;
margin: 0px  0 24px;
letter-spacing: 1.5px;
z-index: 0;
`

const CTATwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
z-index: 0;
`

const Login = (props) => {

    return (
        <Container>
            <Content>
            <BgImage></BgImage>
            <CTA>
              <CTAOne src={CTAone}>
              </CTAOne>
              <SignUp href="./nowhere">GET ALL THERE</SignUp>
              <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.As of 03/26/2 the price of Disney+ and The Disney Bundle will increase by $1.</Description>
              <CTATwo src={CTAtwo}></CTATwo>
            </CTA>
            </Content>
        </Container>
    )
}


export default Login;