import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '@/redux/user/slice';
import { closeIcon, homeIcon, logoutIcon, menuIcon } from '@/assets/icons';
import { projectLogo } from '@/assets/images';
import './Topbar.css';

const TOPBAR_HEIGHT = '4rem'; // "h-16" equivalent in Tailwind

const Topbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  const NavbarLinks = ({ large }: { large?: boolean }) => {
    const navbarLinkClasses =
      'flex flex-row hover:invert-white gap-1 base-regular cursor-pointer';

    return (
      <>
        <Link to="/" className={navbarLinkClasses}>
          <img src={homeIcon} alt="Home" /> Início
        </Link>

        <div
          className={`${navbarLinkClasses} ${large ? 'mr-2' : ''}`}
          onClick={handleLogout}
        >
          <img src={logoutIcon} alt="Logout" /> Sair
        </div>
      </>
    );
  };

  return (
    <header
      className="fixed top-0 left-0 w-full text-dark-2 flex-between px-4 shadow-md z-10 gradient-dark"
      style={{ height: TOPBAR_HEIGHT }}
    >
      <Link to="/" className="flex items-center">
        <img
          src={projectLogo}
          alt="Company logo"
          width={180}
          className="ml-2"
        />
      </Link>

      <nav className="flex items-center gap-4">
        <div className="items-center hidden lg:flex gap-6">
          <NavbarLinks large />
        </div>

        <div className="inline-block lg:hidden">
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            width={28}
            className="hover:invert-white cursor-pointer"
            onClick={handleToggle}
          />

          <div
            className={`
              ${toggle ? 'flex' : 'hidden'}
              absolute bg-gradient-to-t from-primary-dark to-primary top-16 right-0 mx-4 my-3 p-6 gap-2 min-w-[150px] rounded-xl topbar flex-col 
            `}
          >
            <NavbarLinks />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;

export { TOPBAR_HEIGHT };
