import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IContent, ContentProps } from "@/interfaces/interfaces";

const swiperOptions = {
  pagination: true,
  modules: [Pagination],
  spaceBetween: 50,
  slidesPerView: 1,
  allowTouchMove: true,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
};

const ContentSwiper: React.FC<ContentProps> = ({ data }) => {
  return (
    <Swiper className="swiper-content bg-gray md:m-0" {...swiperOptions}>
      {data.map((content: IContent, index: number) => (
        <SwiperSlide
          className="content-list pt-[80px] pb-[70px] px-[20px] box-border md:py-[35px] md:px-[30px] md:first:bg-white md:first:pt-14 xl:first:pt-[70px] xl:py-[60px] xl:px-0"
          key={index}
        >
          <div className="text-wrap md:max-w-[660px]">
            <div className="title-wrap flex items-center mb-5 xl:mb-6">
              <span className="order-number font-roboto font-normal text-sm md:text-lg tracking-normal text-black mr-2.5 after:block after:w-[17px] after:h-[4px] after:rounded-md after:mt-0.5 after:mx-auto md:after:w-[19px] md:after:h-[5px] md:after:mt-1 after:bg-purple">
                {content?.id < 10 ? `0 ${content.id}` : content.id}
              </span>
              <h2 className="title font-roboto font-normal xs:text-2xl sm:text-[28px] md:text-4xl text-gray leading-none tracking-wide">
                {content?.title?.toUpperCase() ?? "Null"}
              </h2>
            </div>

            <p className="description font-roboto font-normal text-[15px] md:text-lg xl:text-xl tracking-normal text-black;">
              {content?.desc}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentSwiper;
