import { Button, Carousel } from "react-bootstrap";
import "./Hero.css";

function HeroSection() {
  return (
    <Carousel className="hero oxygen">
      <Carousel.Item className="caro-container">
        <img
          className="d-block w-100 caro-img"
          src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBndWFyZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
          alt="First slide"
        />
        <Carousel.Caption className="caro-text text-start">
          <p className="blue-color">
            {" "}
            Protecting what matters most - Your fortress of security.
          </p>
          <h3 className="fs-1 mb-4 text-uppercase">We Supply Protection</h3>
          <p>
            At Fortress Security, we offer top-of-the-line security services
            that give you the peace of mind you deserve. Our team of experts is
            dedicated to defending your property against any threat, big or
            small.
          </p>

          <Button variant="outline-primary" className="p-3 mt-2">
            Contact Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro-container">
        <img
          className="d-block w-100 caro-img"
          src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNlY3VyaXR5JTIwZ3VhcmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Second slide"
        />

        <Carousel.Caption className="caro-text text-start">
          <p className="blue-color">
            Defending your peace of mind with advanced security solutions.
          </p>
          <h3 className="fs-1 mb-4 text-uppercase">Service To Our Clients</h3>
          <p>
            From high-tech surveillance systems to 24/7 monitoring, we've got
            you covered. Don't wait until it's too late - protect your assets
            with Fortress Security today!
          </p>
          <Button variant="outline-primary" className="p-3 mt-2">
            Contact Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
