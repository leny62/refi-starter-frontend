import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const FunFact = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/*...::: FunFact Section Start :::... */}
      <section id='funfact-section' className="h-full md:h-full jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] w-full md:w-[90%] mx-auto my-0">
        <div className="p-8 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-[#fff] font-jost">OUR FOCUS</h2>
        </div>
        <div className="flex flex-col gap-[3rem] font-alata">
          <div className="flex flex-wrap gap-[2rem] items-center justify-center">
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/climate-house.svg" />
              </button>
              <span className="w-[8rem] text-center text-white">Climate Tech Circular Solutions</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/co2.svg" />
              </button>
              <span className="w-[8rem] text-center text-white">Decarbonisation</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector1.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Open Source Regenerative AI</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector2.png" />
              </button>
              <span className="w-[8rem] text-center text-white">FoodTech, AgroTech Marginal Communities</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector3.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Psychosocial wellbeing</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector4.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Infra: Data Security, Privacy Trust on Web3</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-[2rem] items-center justify-center">
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector5.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Drones, AI, Eco-automation</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector6.png" />
              </button>
              <span className="w-[8rem] text-center text-white">DeSci, BioTech MedTech, HealthTech</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector7.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Recycling and Saving</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector8.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Clean Energy Storage, Exchange & Efficiency</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector9.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Forestation, Carbon Sequestration</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector10.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Coral reforestation</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-[2rem] items-center justify-center">
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className=" gap-3bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector11.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Automatization of Biodiversity protection</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector12.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Community-based regenerative infrastructure</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector13.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Soil recovery</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector14.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Hydro energy alternatives</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector15.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Anti-plastic solutions</span>
            </div>
            <div className="w-[10rem] flex flex-col items-center justify-center gap-3">
              <button
                className="bg-transparent border border-white text-black w-[3rem] h-[3rem] rounded-full	 flex items-center justify-center">
                <img src="assets/img/icons/Vector16.png" />
              </button>
              <span className="w-[8rem] text-center text-white">Replacement Technologies </span>
            </div>
          </div>
        </div>
      </section>
      {/*...::: Funfact Section End :::... */}
    </>
  );
};

export default FunFact;
