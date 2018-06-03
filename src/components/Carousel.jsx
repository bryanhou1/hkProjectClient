import React from "react";
import Slider from "react-slick";
import Fig1 from '../photoAssets/Fig1.jpg';
import Fig2 from '../photoAssets/Fig2.jpg';
import {Image, Label, Segment} from 'semantic-ui-react';


class Carousel extends React.Component {
  
  //lackluster, fix later
  render() {
    let settings = {
      dots: true,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <Slider {...settings}>
        <Segment padded>
          <Label attached='bottom'>Fig. 1. The phylogenetic relationship of all 54,718 bacterial genomes of 45 phyla in WGD and the occurrence of ARGs (blue nodes) and Rank I ARGs (red nodes). The pathogenic strains were indicated by purple edges.</Label>
          <Image size="massive" src={Fig1} rounded centered/>
        </Segment>
        <Segment padded>
          <Label attached='bottom'>Fig. 2. The global map of metagenomic datasets in MGD. The size of the datasets (nodes) was proportional to the number of samples and the color was differentiated by the eco-type.</Label>
          <Image size="massive" src={Fig2} rounded centered/>
        </Segment>
      </Slider>
    );
  }
}

export default Carousel;
