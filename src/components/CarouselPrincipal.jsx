import './CarouselPrincipal.css';
import Carousel from 'react-bootstrap/Carousel';
const CarouselPrincipal = ()=>{
   return(
    <Carousel className='carusel' data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/carrousel1.jpg"
        alt="First slide"
        width={800}
        height={800}
      />
      <Carousel.Caption>
        <span className='color'>
           <h5>First slide label</h5>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </span>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/carrousel2.jpg"
        alt="Second slide"
        width={800}
        height={800}
      />
      <Carousel.Caption>
         <span className='color'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </span>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/carrousel3.jpg"
        alt="Third slide"
        width={800}
        height={800}
      />
      <Carousel.Caption>
           <span className='color'>
               <h5>Third slide label</h5>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
           </span>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   );
};

export default CarouselPrincipal;