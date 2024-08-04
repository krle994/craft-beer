import { Modal } from '@/components/Modal';
import { SalesChart } from '@/components/SalesChart';
import { ROUTES } from '@/constants/routes';
import { MainLayout } from '@/layouts/MainLayout';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddNewProductForm } from '@/components/AddNewProductForm';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <MainLayout>
      <div className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1 className="text-6xl w-full py-10 text-center">Dashboard</h1>
        <div className="flex w-full justify-end mb-12">
          <Button
            onClick={() => setIsOpen(true)}
            className="text-2xl border-4 border-white bg-white text-black px-2 data-[hover]:bg-black data-[hover]:text-white transition-all duration-300"
          >
            Add new product
          </Button>
        </div>
        <div className="mt-8">
          <SalesChart />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        title="Add new product"
        onClose={() => setIsOpen(false)}
      >
        <AddNewProductForm>
          <div className="flex gap-4 justify-end mt-8">
            <Button
              className="text-2xl border-4 border-white bg-black text-white px-2"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="text-2xl border-4 border-white bg-black text-white px-2"
              type="submit"
            >
              Add
            </Button>
          </div>
        </AddNewProductForm>
      </Modal>
    </MainLayout>
  );
};
