import Testimonial from '../../../components/widget/Testimonial';
import leny from '../../../assets/img/img/leny.png';
import tabata from '../../../assets/img/img/tabata.png';
import oscar from '../../../assets/img/img/oscar.png';
import susana from '../../../assets/img/img/susana.png';
import miche from '../../../assets/img/img/Person.png';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Testimonial_Section = () => {
  return (
    <>
      {/*...::: Testimonial Section Start :::... */}
      <section className='testimonial-section'>
        {/* Section Spacer */}
        <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
              <div className='mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]'>
                <h2 className='text-white'>Our Team</h2>
              </div>
            </div>
            {/* Section Content Block */}

            {/* Testimonial List */}

              {/* Testimonial Item */}
              <div class="flex flex-wrap gap-[2rem] items-center justify-center">
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={tabata} alt="Tabata" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Tabata</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Tokenmics</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={oscar} alt="Oscar" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Oscar</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Founder & CEO</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={susana} alt="Susana" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Susana</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Tokenmics</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={leny} alt="Leny" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Leny</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Tokenmics</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={miche} alt="Miche" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Miche</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Tokenmics</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
                <div class="w-[13rem] h-[18rem] bg-[#202124]">
                  <div class="flex flex-col justify-center items-center gap-[1rem]">
                    <img src={susana} alt="Paola" class="w-24 h-24 rounded-full object-cover mt-[2rem]" />
                    <p class="text-xl text-[#31DDDD] font-jost">Paola</p>
                    <p class="text-xs text-[#fff] relative bottom-[1rem] font-jost">Tokenmics</p>
                    <div class="w-[12rem] h-[2rem] flex justify-center gap-[1rem] items-center"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaInstagram/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaTwitter/></a>
                      <a href="#" target="_blank" class="text-[#252525] text-xl"><FaLinkedin/></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Item */}
            </div>
            {/* Testimonial List */}
          </div>
          {/* Section Container */}
        {/* Section Spacer */}
      </section>
      {/*...::: Testimonial Section Start :::... */}
    </>
  );
};

export default Testimonial_Section;
