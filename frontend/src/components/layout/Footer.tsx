import { shopInfo } from '@/data/shopInfo';

export function Footer() {
  return (
    <footer className="app-footer">
      <p>
        {shopInfo.name} — โทร. {shopInfo.phone} — Line ID: {shopInfo.lineId} — {shopInfo.email}
      </p>
      <p>{shopInfo.addressTh}</p>
      <p lang="en">{shopInfo.internationalNote}</p>
    </footer>
  );
}
