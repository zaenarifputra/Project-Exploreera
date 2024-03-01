import React from "react";
import '../styles/tour-details.css'
import { Container, Row,Col, Form,ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours'

const TourDetails = () => {

    const {id} = useParams()

    const tour = tourData.find(tour=> tour.id == id)

    const {photo, title, desc, price, reviews, city, distance, maxGroupSizetour} = tour

    return <>

    <section>
        <Container>
            <Row>
                <Col lg='8'>
                    <div className="tour_content">
                        <img src={photo} alt="" />

                        <div className="tour_info">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
};

export default TourDetails;