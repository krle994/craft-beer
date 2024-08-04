import { Header } from "@/components/Header";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

export const Manage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    navigate(ROUTES.HOME, { replace: true });
  }

  return (
    <main className="h-full w-screen text-white flex items-center justify-center flex-col font-bebas">
      <Header />
      <div className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1 className="text-6xl w-full py-10 text-center">MANAGE</h1>
      </div>
    </main>
  );
};
