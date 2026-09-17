import { Link } from 'react-router-dom';
import { shopInfo } from '@/data/shopInfo';

export function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <img className="app-header__logo" src="/assets/site/headgigabike1.jpg" alt={shopInfo.name} />
      </Link>
    </header>
  );
}
