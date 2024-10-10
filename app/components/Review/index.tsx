import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import reviews from "@db/reviews";
import "./swiper.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLang } from "@/hooks/useLang";
import { motion } from "framer-motion";

const Review = () => {
  const isMedia768 = useMediaQuery(768);
  const { t, lang } = useLang();

  return (
    <section
      className="mb-10 md:mb-28 scroll-mt-20 md:scroll-mt-28"
      id="reviews"
    >
      <motion.h2
        className="mb-7 px-2 lg:mb-12 lg:text-4xl text-center text-[#333] font-open-sans font-extrabold tracking-wide text-2xl leading-9"
        initial={{
          y: -10,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        {t[lang].review.title}
      </motion.h2>
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <Swiper
          pagination={{
            type: "bullets",
            clickable: true,
            dynamicBullets: true,

            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          parallax
          modules={[Navigation, Pagination, Autoplay, Parallax, Pagination]}
          className="mb-7 w-full md:max-w-[900px] rounded-lg"
        >
          <div className="parallax-bg" data-swiper-parallax="-23%"></div>
          <div className="swiper-button-prev"></div>
          {reviews[lang].map((review, index) => (
            <SwiperSlide
              key={index}
              className="relative swiper-slide px-10 md:px-20"
            >
              <Image
                className="absolute top-0 left-4"
                width={isMedia768 ? 36 : 62}
                height={isMedia768 ? 36 : 62}
                src={`/${review.photo}.webp`}
                alt="profile"
              />
              <div className="mt-9 mb-6 bg-[#b493f9]/80 px-8 py-5 rounded-[50px] cursor-grab">
                <h3
                  className="mb-1 font-open-sans text-base font-bold leading-5 md:text-[22px] md:leading-8"
                  data-swiper-parallax="-100"
                  data-swiper-parallax-duration="500"
                >
                  {review.client}
                </h3>
                <p
                  className="text-[#0f0f0f] font-semibold text-sm leading-5 font-open-sans md:text-lg md:leading-6"
                  data-swiper-parallax="-200"
                  data-swiper-parallax-duration="500"
                  data-swiper-parallax-opacity="0.5"
                >
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
        </Swiper>
      </motion.div>
      <motion.div
        className="mt-9 mb-6 max-w-[290px] mx-auto flex flex-col md:px-2 md:max-w-[900px]"
        initial={{
          x: -20,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <Image
          className="self-start mb-1 md:m-0"
          width={isMedia768 ? 40 : 74}
          height={isMedia768 ? 44 : 73}
          src="/reviewCaller.webp"
          alt="profile"
        />
        <div className="max-w-[260px] md:max-w-[410px] md:-mt-16 md:ml-24 md:p-5 self-end md:self-start border border-solid border-black bg-[#f9f3ba80]/50 px-3 py-4 rounded-3xl">
          <h3 className="mb-1 font-open-sans text-base font-bold leading-5 md:text-[22px] md:leading-8">
            {t[lang].review.callTitle}
          </h3>
          <p className="mb-6 text-[#0f0f0f] font-semibold text-sm leading-5 font-open-sans md:text-lg md:leading-6">
            {t[lang].review.callText}
          </p>
          <button
            className="block mx-auto cursor-pointer border-2 border-solid border-black hover:text-white hover:bg-[#383838] transition-colors duration-300 bg-white py-3 px-4 font-open-sans font-bold tracking-wider text-sm md:text-base text-[#11103D] rounded-md"
            type="button"
          >
            {t[lang].review.reviewBtn}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Review;
