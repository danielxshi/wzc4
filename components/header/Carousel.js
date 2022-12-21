import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel--img--container d-block w-100"
          src="/images/hero.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text--shadow">2021活动</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel--img--container d-block w-100"
          src="/images/hero2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text--shadow">2022活动</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel--img--container d-block w-100"
          src="/images/hero3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text--shadow">2021活动</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
