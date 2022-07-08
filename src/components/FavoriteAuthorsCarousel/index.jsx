import React from 'react';
import classes from './FavoriteAuthorsCarousel.module.sass'
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {Navigation} from "swiper";
import SmallCard from "../SmallCard";
import { Swiper, SwiperSlide } from 'swiper/react';

const FavoriteAuthorsCarousel = ({title, slides}) => {
  return (
    <div className={classes.background}>
      <div className="flex justify-between items-center">
        <p className="uppercase opacity-75 text-sm">
          {title}
        </p>
        <div className="slider-arrows">
          <button>
            <BiLeftArrowAlt/>
          </button>
          <button>
            <BiRightArrowAlt/>
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        modules={[Navigation]}
        navigation
      >
        {slides.map((slide, idx) => {
          return (
            <SwiperSlide key={idx}>
              <SmallCard title={slide.title} description={slide.description} image={slide.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default FavoriteAuthorsCarousel;