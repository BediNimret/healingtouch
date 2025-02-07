import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";

import slide_image_0 from "/slideshow/Healing1.jpg";
import slide_image_1 from "/slideshow/Rekhi.jpg";
import slide_image_2 from "/slideshow/sp.jpg";
import slide_image_3 from "/slideshow/past.jpg";
import slide_image_4 from "/slideshow/hyp.jpg";
import slide_image_5 from "/slideshow/cleansing.jpg";
import slide_image_6 from "/slideshow/ocd.jpg";
import slide_image_7 from "/slideshow/bach-flower-remedies.png";
const style: any = {
  "--swiper-pagination-color": "#b80db8",
  "--swiper-navigation-color": "#b80db8",
};
function App() {
  return (
    <div className="py-2  bg-gradient-to-b from-[#EDCEC5] to-[#F0E7DA]">
      <Swiper
        style={style}
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={5000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        slidesPerView="auto"
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="carousal" src={slide_image_0}></img>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_2} />
            <p className="swiper_text text-black flex justify-center">
              " I am positive and powerful. I will not let any entity interfere
              with my soul "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_3} />
            <p className="swiper_text  flex justify-center">
              " What we are today is because of our past and our present
              dictates our future."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_4} />
            <p className="swiper_text  flex justify-center">
              " Life is ten percent what you experience and ninety percent how
              you respond to it."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_5} />
            <p className="swiper_text text-black flex justify-center">
              " DETOX your mind, body, space around you AND your contact list."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_6} />
            <p className="swiper_text flex justify-center ">
              " If you think you can do it, you can. "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col ">
            <img className="carousal" src={slide_image_1} />
            <p className="swiper_text text-black flex justify-center">
              " Loving myself heals my life. I nourish my mind, body and soul.
              My body heals quickly and easily "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousal" src={slide_image_7} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
