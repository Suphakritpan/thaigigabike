import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { ContactPage } from '@/pages/ContactPage';
import { PaymentPage } from '@/pages/PaymentPage';
import { DealersPage } from '@/pages/DealersPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// The product catalog is by far the largest piece of data on the site, so the
// category page is loaded only when a visitor actually opens a category.
const CategoryPage = lazy(() =>
  import('@/pages/CategoryPage').then((module) => ({ default: module.CategoryPage })),
);

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="category/:slug"
          element={
            <Suspense fallback={<p className="text-muted">กำลังโหลดรายการสินค้า...</p>}>
              <CategoryPage />
            </Suspense>
          }
        />
        <Route path="dealers" element={<DealersPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
