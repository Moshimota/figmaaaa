import React from 'react';
import "./Section1.css"
import { Col, Container, Row } from 'react-bootstrap';
import imr1 from "./img/22459-iwt 1.png"
import imr2 from "./img/mellow-yellow-1 1.png"
import imr3 from "./img/Image.png"



export const Section1 = () =>{
    return (
        <>
            <Container>
                <Row>
                    <Col lg={1}>
                        <p className="stat">Чехлы</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="tacc">
                            <img src={imr1} alt="" />
                            <p className="nazvaniya">Стеклянные</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tacc">
                            <img src={imr2} alt="" />
                            <p className="nazvaniya">Силиконовые</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tacc">
                            <img src={imr3} alt="" />
                            <p className="nazvaniya">Кожаные</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}