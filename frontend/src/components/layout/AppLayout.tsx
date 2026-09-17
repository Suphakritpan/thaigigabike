import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function AppLayout() {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
