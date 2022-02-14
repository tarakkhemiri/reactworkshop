 
import { Carousel  } from 'react-bootstrap';
import im from '../Images/test.jpg'; 
import im2 from '../Images/i2.jpg'; 
import im3 from '../Images/i3.jpg'; 

function Carro() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {im }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Digital Marketing</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {im2 }
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Full Stack Development</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {im3 }
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Consulting</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Carro;
