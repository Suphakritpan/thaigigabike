import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function AppLayout() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        ข้ามไปที่เนื้อหาหลัก
      </a>
      <Header />
      <Navbar />
      <main className="page-content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
