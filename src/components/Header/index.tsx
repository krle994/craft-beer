import { Button } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

import { useAuthStore } from '@/store/authStore';

import { ROUTES } from '@/constants/routes';

import logo from '@/assets/images/cbeLogo.svg';
import { CartModal } from '../CartModal';
import toast from 'react-hot-toast';

export const Header = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  const { pathname } = useLocation();

  const authLabel = isAuthenticated ? 'Logout' : 'Login';
  const isHomePage = pathname === ROUTES.HOME;

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
      toast.success('Logout successful!');
    } else {
      login();
      toast.success('Login successful!');
    }
  };

  return (
    <header className="flex items-center justify-between w-11/12 m-auto min-h-32">
      {isHomePage ? (
        <Link to={ROUTES.HOME} className="text-4xl">
          <img src={logo} alt="Craft Beer Emporium logo" className="w-32" />
        </Link>
      ) : (
        <Link to={ROUTES.HOME} className="text-4xl">
          <IoArrowBackCircleOutline />
        </Link>
      )}
      <div className="flex gap-6 justify-center items-center">
        {isAuthenticated && (
          <Link to={ROUTES.DASHBOARD} className="text-2xl">
            Dashboard
          </Link>
        )}
        <Button className="text-2xl" onClick={handleAuthClick}>
          {authLabel}
        </Button>
        <CartModal />
      </div>
    </header>
  );
};
