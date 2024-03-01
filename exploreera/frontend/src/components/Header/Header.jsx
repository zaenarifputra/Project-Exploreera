import React, {useRef, useEffect} from "react" 
import { Container, Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/images/logo_home.png'
import "./header.css";

const nav_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/tentang_kami',
        display:'Tentang Kami'
    },
    {
        path:'/perjalanan',
        display:'Perjalanan'
    },
    {
        path:'/tours',
        display:'Wisata'
    },
    {
        path:'/testimoni',
        display:'Testimoni'
    },
]

const Header = () => {

const headerRef = useRef(null)

const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
            headerRef.current.classList.add('sticky_header')
        }else {
            headerRef.current.classList.remove('sticky_header')
        }
    })
}

useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
})

    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="navigatiop">
                        <ul className="menu d-flex align-items-center gap-5">
                            {nav_links.map((item,index) => (
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive
                                         ? "active_link" :""}>{item.display}</NavLink>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    
                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button color="outline-warning"><Link to='/login' style={{ color: '#FFFF', textDecoration: 'none' }}>Login</Link></Button>
                        </div>
                        
                        <span className="mobile_menu">
                            <i class="ri-menu-line"></i>
                        </span>

                    </div>
                </div>
            </Row>
        </Container>
    </header>
};

export default Header;