import React from 'react'

function Slider() {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
               <div>
                  <img src="/img/slider/converse_web.jpg"  alt="converse_web" />
               </div>
               <div>
                  <img src="/img/slider/native_web.jpg"  alt="native_web" />
               </div>
               <div>
                  <img src="/img/slider/nikeforce_web.jpg"  alt="nikeforce_web" />
               </div>
               <div>
                  <img src="/img/slider/sb_web.jpg" alt="sb_web" />
               </div>
            </Slider>
         </div>
  )
}

export default Slider