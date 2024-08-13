import Carousel from 'react-bootstrap/Carousel';
import scholar from "./assets/scholar.jpg"
import silly from "./assets/silly.jpg"
import family from "./assets/family.jpeg"
import camel from "./assets/camel.jpg"
import cultured from "./assets/cultured.jpg"

const Gallery = () => {
    return (
        <Carousel className='pb-5' data-interval="false">
        <Carousel.Item>
          <img src={scholar} alt="logo" className='img-fluid min-vh-20'/>
          <Carousel.Caption className='bg-dark text-white'>
            <h3>Smart</h3>
            <p>He's intelligent, educated, and wants to learn everything about you</p>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img src={family} alt="logo" className='img-fluid'/>
          <Carousel.Caption className='bg-dark text-white'>
            <h3>Family Man </h3>
            <p>He takes care of his siblings and parents, and he'll take care of you too</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={silly} alt="logo" className='img-fluid '/>
          <Carousel.Caption className='bg-dark text-white'>
            <h3>Silly Goose</h3>
            <p>
              All he wants is to make you smile :)
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={camel} alt="logo" className='img-fluid '/>
          <Carousel.Caption className='bg-dark text-white'>
            <h3>Animal Lover</h3>
            <p>
              He'll dazzle you with his animal facts
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cultured} alt="logo" className='img-fluid '/>
          <Carousel.Caption className='bg-dark text-white'>
            <h3>Cultured</h3>
            <p>
              A proud Sri Lankan!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
}

export default Gallery