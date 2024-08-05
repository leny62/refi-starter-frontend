import { Outlet } from 'react-router-dom';
import Footer_01 from '../footer/Footer_01';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header
        loginCSS='button hidden rounded-[10px] border-[#fff] bg-transparent text-[#fff] after:bg-[#000] hover:border-[#000] hover:text-white lg:inline-block'
        signupCSS='button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block'
      />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      {/* <Footer_01 /> */}
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Layout;
