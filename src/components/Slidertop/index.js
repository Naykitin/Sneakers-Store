import React from 'react'
import Slider from "react-slick";
import styles from './Slidertop.module.scss';
import "./style.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Slidertop() {

   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      cssEase: "linear"
    };

    const sliderItems = [
      {
         image: "converse_web.jpg",
         alt: "converse_web"
      },
      {
         image: "native_web.jpg",
         alt: "native_web"
      },
      {
         image: "nikeforce_web.jpg",
         alt: "nikeforce_web"
      },
      {
         image: "sb_web.jpg",
         alt: "sb_web"
      }
   ]

  return (
          <div className={styles.sliderWrapper}>
            <Slider {...settings}>
               {sliderItems.map((item) => (
                  <img src={`/img/slider/${item.image}`} alt={item.alt} className={styles.sliderImg} />
               ))}
            </Slider>
         </div>
  )
}

export default Slidertop