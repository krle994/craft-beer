import { TbShoppingCart } from "react-icons/tb";

import logo from "@/assets/images/cbeLogo.svg";
import { Button } from "../Button";
import { useAuthStore } from "@/store/authStore";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Header = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  const { pathname } = useLocation();

  const authLabel = isAuthenticated ? "Logout" : "Login";
  const isHomePage = pathname === ROUTES.HOME;

  const handleAuthClick = () => {
    if (isAuthenticated) {
      return logout();
    } else {
      login();
    }
  };

  console.log(isAuthenticated);

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
          <Link to={ROUTES.MANAGE} className="text-2xl">
            Manage
          </Link>
        )}
        <Button className="text-2xl" onClick={handleAuthClick}>
          {authLabel}
        </Button>
        <Button>
          <TbShoppingCart className="text-3xl" />
        </Button>
      </div>
    </header>
  );
};
