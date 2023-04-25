import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import "./HeaderPage.css"
import pro from "./img/iPhone-13-Pro-Max-silver-1000x1000 1.png"
import bek from "./img/Background card.png"


export function HeaderPage() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={bek}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="df11 justify-content-around">
                                        <h3 className='akk'>Аксессуары для <br></br> Iphone 13 Pro Max</h3>
                                        <div className="dfend">
                                            <img src={pro} alt="" className="iphone" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={bek}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="df11 justify-content-around">
                                        <h3 className='akk'>Аксессуары для <br></br> Iphone 13 Pro Max</h3>
                                        <div className="dfend">
                                            <img src={pro} alt="" className="iphone" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bek}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="df11 justify-content-around">
                                        <h3 className='akk'>Аксессуары для <br></br> Iphone 13 Pro Max</h3>
                                        <div className="dfend">
                                            <img src={pro} alt="" className="iphone" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}