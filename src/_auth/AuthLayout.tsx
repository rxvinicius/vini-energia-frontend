import { Outlet } from 'react-router-dom';
import { loginHeroSection } from '../assets/images';

const AuthLayout = () => {
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>

      <img
        src={loginHeroSection}
        alt="Hero section image"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
    </>
  );
};

export default AuthLayout;
