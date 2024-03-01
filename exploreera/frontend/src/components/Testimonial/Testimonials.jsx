import React from "react";
import Slider from 'react-slick'
import rate from '../../assets/images/rate.png'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

    const settings=  {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:922,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>“Aplikasinya sangat membantu saya dalam menemukan 
                wisata di Indonesia, healing abis UAS itu perlu hehehe.”</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-2.5 mt-3">Arya Mahendra</h6>
                    <p>Mahasiswa</p>
                    <img src={rate} alt="" className="rated"/>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>“Penggunaan aplikasinya sangat mudah, wisata yang direkomendasikan bagus-bagus, 
                Minggu depan mau ke Labuan Bajo.”</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-2.5 mt-3">Ario Dimas</h6>
                    <p>Karyawan</p>
                    <img src={rate} alt="" className="rated"/>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>“Aplikasinya sangat bermanfaat mengenalkan kita kembali akan budaya indonesia yang kian menghilang. ”</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-2.5 mt-3">Siti Mulaimah</h6>
                    <p>Ibu Rumah Tangga</p>
                    <img src={rate} alt="" className="rated"/>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>“Aplikasinya sangat bermanfaat mengenalkan kita kembali akan budaya indonesia yang kian menghilang. ”</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-2.5 mt-3">Siti Jamilah</h6>
                    <p>Ibu Rumah Tangga</p>
                    <img src={rate} alt="" className="rated"/>
                </div>
            </div>
        </div>
    </Slider>
};

export default Testimonials;