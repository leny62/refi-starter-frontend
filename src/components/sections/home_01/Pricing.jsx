import { Link } from 'react-router-dom';
import useTabs from '../../../hooks/useTabs';
import ProjectImage from '../../../assets/img/img/ProjectImage.png'
import ProjectImage2 from '../../../assets/img/img/ProjectImage2.png'
import ProjectImage3 from '../../../assets/img/img/ProjectImage3.png'

const Pricing = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <>
      {/*...::: Pricing Section Start :::... */}
      <section className='pricing-section'>
        {/* Section Spacer */}
        <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-12'>
              <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                <h2>Projects</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Pricing Block */}
            <div className='container mx-auto'>
              <div class="flex flex-wrap gap-[1rem] justify-center" id="projects">
                <div class="w-[21rem] h-[37rem] bg-[#202124] border-2 rounded">
                  <div class="w-[100%] flex flex-col justify-center items-center">
                    <img src={ProjectImage} class="w-[95%] h-auto py-[0.5rem]" />
                  </div>
                  <div class="px-[1.5rem]">
                    <p class="text-[#2DAEAF] text-xl font-bold font-jost">Motus DAO</p>
                    <p class="text-white text-xs font-jost">Universal Health DAO Fund</p>
                    <div class="flex items-center w-full py-2 text-white mt-[2rem]">
                      <span class="text-xs">Network</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">CELO</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Fundraise Goal</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Type</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">IDO</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Launch Date</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Mix Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Max Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Registration Period</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="bg-gradient-to-r text-[#252525] py-2 px-4 rounded-lg mt-4 w-[20rem] text-xs font-bold"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      TOKEN SALE
                    </button>
                  </div>
                </div>
                <div class="w-[21rem] h-[37rem] bg-[#202124] border-2 rounded">
                  <div class="w-[100%] flex flex-col justify-center items-center">
                    <img src={ProjectImage2} class="w-[95%] h-auto py-[0.5rem]" />
                  </div>
                  <div class="px-[1.5rem]">
                    <p class="text-[#2DAEAF] text-xl font-bold font-jost">ReFI Rides</p>
                    <p class="text-white text-xs font-jost">Decentralized fleet of eco-transportation</p>
                    <div class="flex items-center w-full py-2 text-white mt-[2rem]">
                      <span class="text-xs">Network</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">ARB</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Fundraise Goal</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Type</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">IDO</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Launch Date</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Mix Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Max Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Registration Period</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="bg-gradient-to-r text-[#252525] py-2 px-4 rounded-lg mt-4 w-[20rem] text-xs font-bold"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      TOKEN SALE
                    </button>
                  </div>
                </div>
                <div class="w-[21rem] h-[37rem] bg-[#202124] border-2 rounded">
                  <div class="w-[100%] flex flex-col justify-center items-center">
                    <img src={ProjectImage3} class="w-[95%] h-auto py-[0.5rem]" />
                  </div>
                  <div class="px-[1.5rem]">
                    <p class="text-[#2DAEAF] text-xl font-bold font-jost">Regen OG</p>
                    <p class="text-white text-xs font-jost">Regen Community Token</p>
                    <div class="flex items-center w-full py-2 text-white mt-[2rem]">
                      <span class="text-xs">Network</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">OP</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Fundraise Goal</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Type</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">IDO</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Launch Date</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Mix Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Max Allocation</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                    <div class="flex items-center w-full py-2 text-white">
                      <span class="text-xs">Registration Period</span>
                      <div class="flex-1 border-t border-dotted border-white mx-2"></div>
                      <span class="text-xs">TBA</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="bg-gradient-to-r text-[#252525] py-2 px-4 rounded-lg mt-4 w-[20rem] text-xs font-bold"
                      style={{ backgroundImage: 'linear-gradient(to right, #31DDDD, #83C543)' }}>
                      TOKEN SALE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Pricing Section End :::... */}
    </>
  );
};

export default Pricing;
