// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Banner Images
import banner_1 from "../../../assets/banner/banner_admission.jpg";
import banner_2 from "../../../assets/banner/banner_admission.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
