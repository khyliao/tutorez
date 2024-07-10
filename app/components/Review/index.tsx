import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import reviews from "@db/reviews";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  return (
    <section>
      {/* <Image></Image> */}
      <h3></h3>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-96 w-full rounded-lg"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
