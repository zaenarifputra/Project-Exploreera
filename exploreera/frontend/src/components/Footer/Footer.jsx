import React from "react" 
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/foot_log.png'

const quick_links=[
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
];

const quick_links2 =[
    {
        path:'/home',
        display:'Tiket Bus'
    },
    {
        path:'/home',
        display:'Tiket Kereta'
    },
    {
        path:'/home',
        display:'Tiket Wisata'
    },
];

const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Situs ini merupakan situs yang  bertujuan untuk memberikan informasi mengenai indonesia 
                            lebih dalam dan juga memberikan layanan dalam pembelian tiket</p>

                        <div className="social_links d-flex align-item-center gap-4">
                            <span>
                                <Link to=''><i class="ri-instagram-fill"></i></Link>
                            </span>
                            <span>
                                <Link to=''><i class="ri-facebook-circle-fill"></i></Link>
                            </span><span>
                                <Link to=''><i className="ri-youtube-line"></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>

                <Col lg='3'>
                    <h5 className="footer_link-title">Halaman</h5>

                    <ListGroup className="footer_quick-links">
                        {   quick_links.map((item,index)=>(
                                <li className="list">
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))
                        }
                    </ListGroup>        
                </Col>
                <Col lg='3' className="halaman">
                    <h5 className="footer_link-title">Produk</h5>

                    <ListGroup className="footer_quick-links">
                        {   quick_links2.map((item,index)=>(
                            <li className="list">
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))
                     }
                    </ListGroup>        
                </Col>
                <Col lg='12' className="text-center pt-5">
                    <p className="copyright">Copyright {year}, by ExploreEra</p>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;