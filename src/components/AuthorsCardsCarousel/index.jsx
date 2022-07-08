import classes from "./SmallCardsCarousel.module.sass";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import SmallCard from "../SmallCard";

const AuthorsCardsCarousel = ({title, slides}) => {

  const navigate = useNavigate();

  const goToAuthorPage = (id) => {
    navigate('/author/'+id)
  }

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
              <SmallCard
                        author={slide}
                         onClick={() => goToAuthorPage(slide._id)} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default AuthorsCardsCarousel