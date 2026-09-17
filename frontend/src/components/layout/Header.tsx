import { Link } from 'react-router-dom';
import { shopInfo } from '@/data/shopInfo';

export function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <img className="app-header__logo" src="/assets/site/thaigigabike.jpg" alt={shopInfo.name} />
      </Link>
      <h1 className="app-header__title">{shopInfo.name}</h1>
    </header>
  );
}
