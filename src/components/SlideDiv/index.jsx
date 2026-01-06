import React, { useRef } from "react";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import useStyles from "./style";
import dataList from "@/data/tabList.json";
import { useSelector } from "react-redux";
function SlideDiv() {
  const classes = useStyles();
  var sliderRef = useRef();
  const [tabList, setTabList] = React.useState(dataList);
  const { error, loading, user } = useSelector((state) => state.user);

  var settings = {
    infinite: tabList?.length > 3 ? true : false,
    speed: 500,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: tabList?.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: tabList?.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: tabList?.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: tabList?.length > 2 ? true : false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: tabList?.length > 2 ? true : false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} ref={(el) => (sliderRef = el)}>
        <div className={classes.mainDiv}>
          <div className={classes.infoDiv}>
            <Typography variant="h3" color="white" className={classes.subtxt}>
              {"Stake rate"}
            </Typography>
            <Typography variant="h1" color="white" className={classes.txt}>
              {user?.stakingRate != undefined ? user?.stakingRate : 0}
            </Typography>
          </div>
        </div>
        <div className={classes.mainDiv}>
          <div className={classes.infoDiv}>
            <Typography variant="h3" color="white" className={classes.subtxt}>
              {"Current balance"}
            </Typography>
            <Typography variant="h1" color="white" className={classes.txt}>
              {user?.totalCoinsOwned != undefined ? user?.totalCoinsOwned : 0}
            </Typography>
          </div>
        </div>
        {/* );
          })} */}
      </Slider>
    </div>
  );
}
export default SlideDiv;
