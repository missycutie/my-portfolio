import React from "react";
import "./testimonials.css";
import AVA1 from "../../assets/ava1.jpeg";
import AVA2 from "../../assets/ava2.jpeg";
import AVA3 from "../../assets/ava3.jpeg";
import AVA4 from "../../assets/ava4.jpeg";
// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVA1,
    name: "Cutie 1",
    review: "Fighting, Princess",
  },
  {
    avatar: AVA2,
    name: "Cutie 2",
    review: "Fighting, Princess",
  },
  {
    avatar: AVA3,
    name: "Cutie 3",
    review: "Fighting, Princess",
  },
  {
    avatar: AVA4,
    name: "Cutie 4",
    review: "Fighting, Princess",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container " 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
