import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Home from '../../../assets/img/Home.png';
import A from '../../../assets/img/img/a.png';
import AA from '../../../assets/img/img/aa.png';
import B from '../../../assets/img/img/b.png';
import BB from '../../../assets/img/img/bb.png';
import C from '../../../assets/img/img/c.png';
import CC from '../../../assets/img/img/cc.jpeg';
import D from '../../../assets/img/img/d.png';
import DD from '../../../assets/img/img/dd.png';
import E from '../../../assets/img/img/e.png';
import EE from '../../../assets/img/img/ee.png';
import F from '../../../assets/img/img/f.png';
import FF from '../../../assets/img/img/ff.png';
import G from '../../../assets/img/img/g.png';
import GG from '../../../assets/img/img/gg.png';
import H from '../../../assets/img/img/h.png';
import I from '../../../assets/img/img/i.png';
import J from '../../../assets/img/img/j.png';
import JJ from '../../../assets/img/img/jj.png';
import K from '../../../assets/img/img/k.png';
import KK from '../../../assets/img/img/kk.png';
import L from '../../../assets/img/img/l.png';
import LL from '../../../assets/img/img/ll.png';
import M from '../../../assets/img/img/m.png';
import MM from '../../../assets/img/img/mm.png';
import N from '../../../assets/img/img/n.png';
import NN from '../../../assets/img/img/nn.png';
import O from '../../../assets/img/img/o.png';
import OO from '../../../assets/img/img/oo.png';
import P from '../../../assets/img/img/p.png';
import Q from '../../../assets/img/img/q.png';
import W from '../../../assets/img/img/w.png';
import X from '../../../assets/img/img/x.png';
import Y from '../../../assets/img/img/y.png';
import Z from '../../../assets/img/img/z.png';


const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id='section-hero'>
        <div className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]'>
          <div className='global-container'>
            <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
              <h1 className='text-[3rem] md:text-[5rem] jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                The Specialized Launchpad for a Regenerative Future
              </h1>
              <p className='jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]'>
                Fostering a global regenerative startup ecosystem thriving and tackling the urgent problems of the world, while creating a nature-protective economy owned by the community.
              </p>
              <div
                className='jos flex flex-wrap justify-center gap-6'
                data-jos_animation='fade'
              >
                <Link
                  to=''
                  className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#fff] hover:border-[#fff] hover:text-[#000]'
                >
                  Submit Project
                </Link>
                <Link
                  to=''
                  className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-[#000] hover:border-[#fff] hover:text-[#fff]'
                >
                  Join Whitelist
                </Link>
              </div>
            </div>
            <div
              className='jos hero-img overflow-hidden rounded-2xl bg-black'
              data-jos_animation='zoom'
            >
              <img
                src={Home}
                alt='hero-dashboard'
                width='1296'
                height='640'
                className='h-auto w-full'
              />
            </div>

            <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20'></div>
            <div className='jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16'>
              <p className='text-lg'>
                Companies of all sizes trust us
              </p>
            </div>
            <div className='jos brand-slider flex items-center justify-center' data-jos_animation='fade'>
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
                    src={A}
                    alt='refi-dao'
                    width='120'
                    height='10'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={AA}
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={B}
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={BB}
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={C}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={CC}
                    alt='brand-1'
                    width='180'
                    height='38'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={D}
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={DD}
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={E}
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={EE}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={F}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={FF}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={G}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={GG}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={F}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={H}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={I}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={J}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={JJ}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={K}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={KK}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={L}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={LL}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={M}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={MM}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={NN}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={O}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={OO}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={P}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Q}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={W}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={X}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Y}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Z}
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className='bg-[#2D6332] absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]'></div>

          <div className='bg-[#2D6332] absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]'></div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
