import React from "react";
import Slider from "react-slick";
import Fig1 from '../photoAssets/Fig1.jpg';
import Fig2 from '../photoAssets/Fig2.jpg';
import {Image, Container} from 'semantic-ui-react';


class Carousel extends React.Component {

  //lackluster, fix later
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrow:true
    };
    return (
      <Slider {...settings}>
        <div>
          <Container>
            <Image width={1200} src={Fig1} />
          </Container>
        </div>
        <div>
          <Container>
            <Image width={1200} src={Fig2} />
          </Container>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
