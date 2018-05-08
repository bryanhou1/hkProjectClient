import React from "react";
import Slider from "react-slick";
import Fig1 from '../photoAssets/Fig1.jpg';
import Fig2 from '../photoAssets/Fig2.jpg';
import {Image, Container, Label, Segment} from 'semantic-ui-react';


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
            <Segment padded>
              <Label attached='bottom'>Fig 1</Label>
              <Image width={1200} src={Fig1} rounded fluid/>
            </Segment>
          </Container>
        </div>
        <div>
          <Container>
            <Segment padded>
              <Label attached='bottom'>Fig 2</Label>
              <Image width={1200} src={Fig2} rounded fluid/>
            </Segment>
          </Container>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
