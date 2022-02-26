import classes from "./SmallCardsCarousel.module.sass";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import {BiLeftArrowAlt, BiRightArrowAlt, BiUserPlus} from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const SmallCardsCarousel = ({title, slides}) => {

  return (
    <div className={classes.SmallCardsCarousel}>
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
        slidesPerView={4}
        modules={[Navigation]}
        navigation
      >
        {slides.map((slide, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={classes.slide}>
                <div className={classes.slideImage}>
                  <img src={slide.image} alt={slide.title}/>
                  <button><FaEye/></button>
                </div>
                <h3 className="text-xl mt-5">
                  {slide.title}
                </h3>
                <p className="text-sm my-3">
                  {slide.description}
                </p>
                <div className={classes.followers}>
                  <BiUserPlus className="text-lg"/>
                  {slide.followers.toLocaleString()}
                  <span className="text-sm">
                    &nbsp;
                    Followers
                  </span>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SmallCardsCarousel