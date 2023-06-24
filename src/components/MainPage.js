import { Outlet } from "react-router-dom";
import Header from "./MainNavigation";

const Main = () => {

    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
      
    )
}

export default Main;