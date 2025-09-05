import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Anshum Ashu",
    role: "google",
    img: "https://drive.google.com/uc?export=view&id=1wGoZiY12jSpwY8U0ODze4-nA-_rlsgUh",
    text: "Edison bulb retro cloud bread echo park...",
  },
  {
    name: "Ayush Jaiswal",
    role: "microsoft",
    img: "https://drive.google.com/uc?export=view&id=ANOTHER_FILE_ID",
    text: "Edison bulb retro cloud bread echo park...",
  },
  {
    name: "Harsh Kabra",
    role: "amazon",
    img: "https://drive.google.com/uc?export=view&id=YET_ANOTHER_FILE_ID",
    text: "Edison bulb retro cloud bread echo park...",
  },
  {
    name: "Bikash Prasad Yadav",
    role: "apple",
    img: "https://drive.google.com/uc?export=view&id=YET_ANOTHER_FILE_ID",
    text: "Edison bulb retro cloud bread echo park...",
  },
];


const Fourth = () => {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className=" text-5xl font-bold title-font mb-4 text-black">
            Testimonials
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-gray-500">
            See what our satisfied clients say about Sell&Well.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col items-center text-center border p-6 rounded-lg mx-2">
                <img
                  alt={item.name}
                  src={item.img}
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                />
                <p className="leading-relaxed text-gray-600 mb-4">{item.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {item.name}
                </h2>
                <p className="text-gray-500">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fourth;
