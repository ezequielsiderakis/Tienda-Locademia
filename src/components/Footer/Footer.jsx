import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import logo from '../../assets/tottemlogo.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import './Footer.css'

export default function Footer(){
    return(
            <Row className='footer-container'>
                <Col sm={6} className='col-img'>
                    <Image src={logo} fluid rounded></Image>
                </Col>

                <Col sm={6} className='col-info'>
                    <h4>Contactanos</h4>
                    <img src={location} alt="celular" width='30px' height='30px' />
                    <span>Belgrano 95, Ramos Mejia , La Matanza, Bs. As.</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>1160175874</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>46549874</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>46540210</span>
                </Col>
                <h5 className='rights'>All Rights Reserved. © 2022 <span>Tienda Locademia</span></h5>
            </Row>

    )
}