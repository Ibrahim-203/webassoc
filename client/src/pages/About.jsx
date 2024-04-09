import Navbar from "../../components/Navbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Footer from "../../components/Footer";

const about = () => {
  return (
    <>
      <Navbar />
      <section
        id="banner"
        className="bg-[url('../src/assets/images/338.jpg')] flex items-center
           justify-center h-[50vh] bg-no-repeat bg-cover bg-center bg-fixed"
      >
        <h1 className="text-5xl text-white font-thirdFont">A propos</h1>
      </section>

      <section className="mt-8 flex items-center justify-center">
        <div className="flex lg:w-[80%] w-[75%] gap-2 flex-col lg:flex-row">
          <img
            src="../../src/assets/images/AESA-member.jpg"
            alt=""
            className="h-80 rounded-md w-auto"
          />
          <div className="flex flex-col gap-y-6">
            <h2 className="text-3xl font-thirdFont">Historique</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta adipisci, corrupti debitis facilis saepe aliquid quaerat
              magni deserunt, sint error eum neque? Laudantium recusandae
              doloribus at, modi mollitia delectus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta adipisci, corrupti debitis facilis saepe aliquid quaerat
              magni deserunt, sint error eum neque? Laudantium recusandae
              doloribus at, modi mollitia delectus?
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mt-8 bg-primary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-3 w-[85%] lg:justify-between text-white text-center">
          <div className="text-center">
            <p className="text-xl md:text-2xl">1000 +</p>
            <p className="text-xl md:text-2xl">Membres</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl">400</p>
            <p className="text-xl md:text-2xl">Garçons</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl">600</p>
            <p className="text-xl md:text-2xl">Filles</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl">20</p>
            <p className="text-xl md:text-2xl">Membres de bureau</p>
          </div>
        </div>
      </section>
      <section id="swipper" className="m-5">
        <h1 className="text-center text-3xl font-thirdFont mb-4">Membres de bureau</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          <SwiperSlide><img src="../../src/assets/images/40217.jpg" className="rounded-md" alt="" /></SwiperSlide>
          
        </Swiper>
      </section>
      <Footer/>
    </>
  );
};

export default about;
