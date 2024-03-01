import React from "react";
import './newsletter.css'
import { Container, Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter_content">
                        <h2></h2>
                    </div>
                </Col>
                <Col lg='6'></Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter