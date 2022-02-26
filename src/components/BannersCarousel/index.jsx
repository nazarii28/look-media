import classes from "./BannersCarousel.module.sass";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import {BiHeart, BiDotsHorizontalRounded, BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";

const BannersCarousel = ({title}) => {

  return (
   <div className={classes.BannersCarousel + " w-full"}>
     <div className="flex justify-between items-center">
       <p className="uppercase opacity-75 text-sm text-white">
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
       slidesPerView={1}
       modules={[Navigation]}
       navigation
     >
       <SwiperSlide>
         <div className={"pt-3 pl-10 pb-7 pr-3 bg-cover flex justify-between " + classes.slide}
              style={{
                backgroundImage: 'url("https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/82/66/41/60/ee40e9840cd7.jpg")'
              }}>
           <div>
             <h2 className="text-3xl mt-8">
               Something about Drake
             </h2>
             <p className="text-accent mt-5 mb-4">
               The Off Seson
             </p>
             <p>
               Album 2020 best tracks atvechaju
             </p>
             <div className="flex mt-9">
               <Button>play</Button>
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
       <SwiperSlide>
         <div className={"pt-3 pl-10 pb-7 pr-3 bg-cover flex justify-between " + classes.slide}
              style={{
                backgroundImage: 'url("https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/82/66/41/60/ee40e9840cd7.jpg")'
              }}>
           <div>
             <h2 className="text-3xl mt-8">
               Something about Drake
             </h2>
             <p className="text-accent mt-5 mb-4">
               The Off Seson
             </p>
             <p>
               Album 2020 best tracks atvechaju
             </p>
             <div className="flex mt-9">
               <Button>play</Button>
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
     </Swiper>
   </div>
  )
}

export default BannersCarousel