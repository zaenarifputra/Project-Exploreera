import React from "react" ;
import Header from './../Header/Header';
import Routers from "../../router/Routers";
import Footer from './../Footer/Footer';
import Home from "../../pages/Home";



const Layout = () => {
    return (
    <>
    <Header/>
    <Routers/>
    <Footer/>
    </>
    );
};

export default Layout;