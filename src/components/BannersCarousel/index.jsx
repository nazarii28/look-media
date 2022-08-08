import classes from "./BannersCarousel.module.sass";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Controller, Navigation} from 'swiper';
import 'swiper/css';
import {BiHeart, BiDotsHorizontalRounded, BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {useSwiper} from "swiper/react";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTrack, pause, play} from "../../features/trackSlice.ts";
import BannerSkeleton from "./BannerSkeleton";

const BannersCarousel = ({title, songs, isLoading}) => {

    const navigationPrev = useRef(null)
    const navigationNext = useRef(null)

    const track = useSelector(state => state.track)
    const dispatch = useDispatch()

    const playHandler = (idx) => {
        if(songs[idx]._id === track.id) {
            if (track.isPlaying) {
                dispatch(pause())
            } else {
                dispatch(play())
            }
        } else {
            dispatch(changeTrack(songs[idx]))
        }
    }

  return (
   <div className={classes.BannersCarousel + " w-full"}>
     <div className="flex justify-between items-center">
       <p className="uppercase opacity-75 text-sm text-white">
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
       slidesPerView={1}
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
       {
           isLoading ?
               <BannerSkeleton/>
               :
            songs.slice(0, 2).map((item, idx) => (
             <SwiperSlide key={item._id}>
               <div className={"pt-3 pl-10 pb-7 pr-3 bg-cover flex justify-between " + classes.slide}
                    style={{
                      backgroundImage: 'url("https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/82/66/41/60/ee40e9840cd7.jpg")'
                    }}>
                 <div>
                   <h2 className="text-3xl mt-8">
                       {item.name}
                   </h2>
                   <p className="text-accent mt-5 mb-4">
                     The Off Seson
                   </p>
                   <p>
                     Album 2020 best tracks atvechaju
                   </p>
                   <div className="flex mt-9">
                     <Button
                        onClick={() => playHandler(idx)}
                     >play</Button>
                     <Button outline circle className="mx-3">
                       <BiHeart/>
                     </Button>
                     <Button outline circle>
                       <BiDotsHorizontalRounded/>
                     </Button>
                   </div>
                 </div>
                 <div>
                   <Button circle>
                     <BiHeart/>
                   </Button>
                 </div>
               </div>
             </SwiperSlide>
         ))
       }
     </Swiper>
   </div>
  )
}

export default BannersCarousel