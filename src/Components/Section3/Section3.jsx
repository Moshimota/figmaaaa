import React from 'react';
import "./Section3.css"
import { Col, Container, Row } from 'react-bootstrap';
import { dataSec3 } from './data';



export const Section3 = () =>{
    return (
        <>
            <Container>
                <Row>
                    <Col lg={2}>
                        <p className="stat">Беспроводные наушники</p>
                    </Col>
                </Row>
                <Row>
                    {dataSec3?.map((res) => {
                        return (
                            <>
                                <Col lg={4}>
                                    <div className="card1">
                                        <div className="yur">
                                            <img src={res?.love} alt="" className="yurak" />
                                        </div>
                                        <div className="igo">
                                            <img src={res?.nuw} alt="" className="naw" />
                                        </div>
                                        <div className="df">
                                            <div className="dfit">
                                                <p className="eman">{res?.name}</p>
                                            </div>
                                            <div className="dfit">
                                                <p className="ric">{res?.price}</p>
                                            </div>
                                        </div>
                                            <div className="stars">
                                                <img src={res?.star} alt="" className="star" />
                                            </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}