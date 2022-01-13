import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from "../../assets/img/img-for-carousel5.jpeg";
import CarouselImg1 from "../../assets/img/img-for-carousel4.jpeg";
import CarouselImg2 from "../../assets/img/carousel-img5.jpeg";

const MainCarousel = () => {
  let style = {
    height: "700px",
    
  };

  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={CarouselImg1} alt="img" style={style} />
      </div>
      <div>
        <img src={CarouselImg} alt="img" style={style} />
      </div>
      <div>
        <img src={CarouselImg2} alt="img" style={style} />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
