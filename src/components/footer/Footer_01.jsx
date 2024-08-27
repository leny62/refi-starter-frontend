import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      <div className='py-[60px] xl:pb-[100px] xl:pt-[130px]'>
        <div className='overflow-hidden'>
          <div className='footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap'>
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Spark Regenerative Finance
            </div>
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Spark Regenerative Finance
            </div>
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Spark Regenerative Finance
            </div>
          </div>
        </div>
      </div>
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]'>
          <div className='flex flex-col gap-y-6'>
            <p>
              Website: <Link to='/'>www.refistarter.org</Link>
            </p>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          {/* <div className='flex flex-col gap-y-6'>
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Primary Pages
            </h4>
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/pricing'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          {/* Footer Widget */}
          {/* Footer Widget */}
          {/* <div className='flex flex-col gap-y-6'>
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Utility pages
            </h4>
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  to='/signup'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/error-404'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  404 Not found
                </Link>
              </li>
              <li>
                <Link
                  to='/reset-password'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Password Reset
                </Link>
              </li>
            </ul>
          </div> */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Subscribe to our newsletter
            </h4>
            <form onSubmit={handleSubmit}>
              <div className='relative h-[50px] max-w-[300px]'>
                <input
                  type='email'
                  name='newsletter-email'
                  id='newsletter-email'
                  placeholder='Enter your email'
                  className='p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none'
                  required=''
                />
                <button
                  type='submit'
                  className='absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-orange-500'
                >
                  <img
                    src='assets/img/th-1/arrow-right-large.svg'
                    alt='newsletter'
                  />
                </button>
              </div>
            </form>
          </div>
          {/* Footer Widget */}
          {/* Social Media Links */}
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Follow Us
            </h4>
            <div className='flex gap-x-4'>
              <a
                href='https://www.linkedin.com/company/refistarter/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href='https://x.com/refistarter'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
              >
                <FaTwitter size={30} />
              </a>
              <a
                href='https://www.facebook.com/ReFiStarter'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href='https://www.instagram.com/refistarter/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          {/* Social Media Links */}
        </div>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Bottom */}
        {/* <div className='py-9 text-center'>
          <p>
            Built by refistarter to refistarter with  and 
          </p>
        </div> */}
        {/* Footer Bottom */}
      </div>
      <div className='bg-[#2D6332] absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div>
    </footer>
  );
};

export default Footer_01;
