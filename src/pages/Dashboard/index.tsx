import { SalesChart } from '@/components/SalesChart';
import { ROUTES } from '@/constants/routes';
import { MainLayout } from '@/layouts/MainLayout';
import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <MainLayout>
      <div className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1 className="text-6xl w-full py-10 text-center">Dashboard</h1>
        <div className="mt-8">
          <SalesChart />
        </div>
      </div>
    </MainLayout>
  );
};
