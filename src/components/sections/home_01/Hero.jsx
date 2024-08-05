import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Home from '../../../assets/img/Home.png'

const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section
        id='section-hero'
      >
        <div 
        className='relative z-[1] overflow-hidden pb-20 pt-28 lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[230px] xxl:pt-[260px]'
        style={{
          backgroundImage: `url(${Home})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className='global-container'>
            <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
              <p className='jos slide-from-bottom text-[#fff] text-[3.5rem] mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
              Empowering Web3 ReFi Projects for a Sustainable Future
              </p>
              <div
                className='jos flex flex-wrap justify-center gap-6'
                data-jos_animation='fade'
              >
                <Link
                  to='/contact'
                  className='button rounded-[10px] border-2  bg-[#fff] py-4 text-[#2A5139] after:bg-[#000] hover:border-[#000] hover:text-white'
                >
                  Invest Now
                </Link>
                <Link
                  to='/about'
                  className='button rounded-[10px] border-2 border-[#fff] bg-transparent py-4 text-[#fff] after:bg-[#000] hover:border-[#000] hover:text-white'
                >
                  Submit Project
                </Link>
              </div>
            </div>
            {/* <div className='jos brand-slider' data-jos_animation='fade'>
              <Swiper
                slidesPerView={2}
                spaceBetween={105}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-1.png'
                    alt='brand-1'
                    width='180'
                    height='38'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-2.png'
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-3.png'
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-4.png'
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-5.png'
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-1.png'
                    alt='brand-1'
                    width='180'
                    height='38'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-2.png'
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-3.png'
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-4.png'
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-5.png'
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
              </Swiper>
            </div> */}
          </div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
