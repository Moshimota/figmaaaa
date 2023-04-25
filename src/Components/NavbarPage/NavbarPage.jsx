import React from 'react';
import "./NavbarPage.css"
import logo from "./img/Frame 9.png"
import phone from "./img/Vector (12).png"
import karz from "./img/Group 26.png"
import { Col, Container, Row } from 'react-bootstrap';



export const NavbarPage = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={4}>
                        <div className="df1">
                            <div className="dfem">
                                <img src={logo} alt="" className="logo" />
                            </div>
                            <div className="df2">
                                <div className="dfem">
                                    <img src={phone} alt="" className="phone" />
                                </div>
                                <p className="mod">Выбрать модель телефона</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="txe">
                            <img src={karz} alt="" className="kars" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}