import classes from "./SmallCardsCarousel.module.sass";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import SmallCard from "../SmallCard";
import ContentLoader from "react-content-loader";
import AuthorCardSkeleton from "./AuthorCardSkeleton";
import {useEffect, useRef, useState} from "react";

const calculateSlidesQuantity = () => {
    if(window.innerWidth < 1550) {
        return 3
    } else {
        return 4
    }
}

const AuthorsCardsCarousel = ({title, slides, isLoading}) => {

    const navigate = useNavigate()

    const goToAuthorPage = (id) => {
        navigate('/author/' + id)
    }

    const navigationPrev = useRef(null)
    const navigationNext = useRef(null)

    const [slidesPerView, setSlidesPerView] = useState(calculateSlidesQuantity())

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSlidesPerView(calculateSlidesQuantity())
        })
    }, [])

    return (
        <div

        >
            <div className="flex justify-between items-center">
                <p className="uppercase opacity-75 text-sm">
                    {title}
                </p>
                <div className="slider-arrows">
                    <button ref={navigationPrev}>
                        <BiLeftArrowAlt/>
                    </button>
                    <button ref={navigationNext}>
                        <BiRightArrowAlt/>
                    </button>
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                modules={[Navigation]}
                navigation={{
                    prevEl: navigationPrev.current,
                    nextEl: navigationNext.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrev.current;
                    swiper.params.navigation.nextEl = navigationNext.current;
                }}
            >
                {isLoading ?
                    Array(4).fill(0).map((_, idx) => (
                        <SwiperSlide key={idx}>
                            <AuthorCardSkeleton/>
                        </SwiperSlide>
                    ))

                : slides.map((slide, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <SmallCard
                                author={slide}
                                onClick={() => goToAuthorPage(slide._id)}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default AuthorsCardsCarousel