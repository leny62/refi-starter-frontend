import Accessible from '../../../assets/img/accessible.png'

const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id='content-section-1'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md md:order-1'
                data-jos_animation='fade-left'
              >
                <img
                  src={Accessible}
                  alt='Accessible'
                  width='526'
                  height='450'
                  className='h-auto w-full'
                  loading="lazy"
                />
              </div>
              {/* Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2 className="text-[36px] md:text-[52px]">Climate technology startups on demand</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    According to 2022 MIT Research, the world needs dozens of emerging climate technology startups in the next decades to tackle global emissions.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    Our goal is to amplify the impact of Blockchain technology linking outstanding ventures with a community of supporters, prioritizing excellence, trustworthiness, and relentless execution.
                  </p>
                  {/* Add Hyperlink */}
                  <p className='mb-7 last:mb-0'>
                    Check out our latest update on Twitter: <a href="https://x.com/refistarter/status/1801238476429365702" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
                  </p>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
