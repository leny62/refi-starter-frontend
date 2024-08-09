import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const FunFact = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/*...::: FunFact Section Start :::... */}
      <section id='funfact-section'>
        <div className='mx-auto max-w-[1500px] px-5'>
          <div className='jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]'>
            {/* FunFact Left Block */}
            <div className='relative overflow-hidden rounded-[30px] lg:rounded-[50px]'>
            </div>
            <div className='self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28'>
            </div>
          </div>
        </div>
      </section>
      {/*...::: Funfact Section End :::... */}
    </>
  );
};

export default FunFact;
