import React from "react" ;
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap';
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";


const Home = () => {
    return <>
    
    <section>
        <Container>
            <Row>
                <Col>
                    <div className="hero_content">
                        <h2>ESKPLORASI</h2>
                        <h1>Jelajahi Wisata Di Indonesia Bersama ExploreEra</h1>
                        <p>Mulai kenali wisata dan budaya yang telah asing</p>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <h2 className="featured_tour-title">Rekomendasi Tempat Wisata</h2>
                    <p className="featured_p">Tempat wisata di Indonesia yang sedang hype akhir-akhir ini</p>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                    <div className="experience_content">
                        <h2>Mengenai Explore Era</h2>
                        <p>Eksplore era merupakan platform yang akan membantu kamu menemukan liburan impian kamu menjadi kenyataan</p>
                    </div>
                    <div className="counter_wrapper d-flex ">
                        <div className="experience_title">
                            <i class="ri-send-plane-fill"><span className="jumlah">532+</span></i>
                            <h6 className="description">Penggunaan Transportasi</h6>
                        </div>
                        <div className="experience_title">
                        <i class="ri-camera-fill"><span className="jumlah">700+</span></i>
                            <h6 className="description">Penciptaan Momen</h6>
                        </div>
                        <div className="experience_title">
                            <i class="ri-ticket-2-fill"><span className="jumlah">1M+</span></i>
                            <h6 className="description">Kepuasaan Wistawaan</h6>
                        </div>
                    </div>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <h2 className="title_gallery">Explore Indonesia Lebih Dalam</h2>
                <p className="description_gallery">Pengenalan Budaya , makanan, dan produk lokal</p>
                <Col lg='12'>
                <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <h2 className="testimonial_title">Apa Kata Mereka?</h2>
                <p className="testimonial_desc">Kepercayaan mereka kepada kami membangun kami menjadi 
                    lebih baik lagi dan akan memebantu kinerja kami kedepannya</p>
            </Row>
            <Col lg="12">
                <Testimonials/>
            </Col>
        </Container>
    </section>
    </>
};

export default Home;