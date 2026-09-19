import { Link } from 'react-router-dom';
import { shopInfo } from '@/data/shopInfo';

export function Header() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__brand">
          <img
            className="app-header__logo"
            src="/assets/site/headgigabike1.jpg"
            alt={shopInfo.name}
          />
        </Link>
        <div className="app-header__contact">
          <a className="app-header__phone" href={`tel:${shopInfo.phone.replace(/-/g, '')}`}>
            โทร. {shopInfo.phone}
          </a>
          <span className="app-header__detail">Line ID: {shopInfo.lineId}</span>
          <span className="app-header__detail">{shopInfo.openingHours}</span>
        </div>
      </div>
    </header>
  );
}
