import { Header } from '@/components/Header';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="h-full w-screen text-white flex items-center justify-center flex-col font-bebas">
        <Header />
        {children}
      </main>
      <Toaster />
    </>
  );
}
