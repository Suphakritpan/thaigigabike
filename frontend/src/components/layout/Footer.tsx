import { shopInfo } from '@/data/shopInfo';

export function Footer() {
  return (
    <footer className="app-footer">
      <p>
        {shopInfo.name} — โทร. {shopInfo.phone} — Line ID: {shopInfo.lineId} — {shopInfo.email}
      </p>
    </footer>
  );
}
