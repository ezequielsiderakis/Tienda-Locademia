import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from '../../assets/01.png'
import slider2 from '../../assets/02.png'
import slider3 from '../../assets/03.png'
import slider4 from '../../assets/04.png'

export default function Slider(){
  return (
  <div>
    <Carousel fade>
      <Carousel.Item interval={2000}>
          <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tienda Locademia</h3>
            <h6>Racing , La mejor ropa</h6>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Tienda Locademia </h3>
            <h6>Encontra todo de la Acade</h6>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tienda Locademia</h3>
            <h6>Tu ropa Preferida</h6>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <img
          className="d-block w-100"
          src={slider4}
          alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Tienda Locademia</h3>
            <h6>Lo mejor en ropa deportiva</h6>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
};

