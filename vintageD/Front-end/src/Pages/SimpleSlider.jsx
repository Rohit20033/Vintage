import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
    };
    //height={["600px","600px","400px"]}
    return (
      <Box >
        <Slider {...settings}>
          <Box height={"100px"} >
            <Image   src="https://i.gifer.com/92F4.gif" />
          </Box>
          <Box height={"400px"}>
            <Image src="https://media.tenor.com/BziIc-WFbLkAAAAC/apple-airpods-pro.gif" />
          </Box>
          <Box height={"400px"}>
            <Image src="https://media.idownloadblog.com/wp-content/uploads/2020/10/MagSafe-iPhone-12-animation.gif" />
          </Box>
          <Box height={"400px"}>
            <Image src="https://magazine.tagheuer.com/wp-content/uploads/2022/08/b.gif" />
          </Box>
        </Slider>
      </Box>
    );
  }
}
