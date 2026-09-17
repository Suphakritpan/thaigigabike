import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ContactPage } from '@/pages/ContactPage';
import { PaymentPage } from '@/pages/PaymentPage';
import { DealersPage } from '@/pages/DealersPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:slug" element={<CategoryPage />} />
        <Route path="dealers" element={<DealersPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
