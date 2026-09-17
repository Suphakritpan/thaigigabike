import { Link } from 'react-router-dom';

interface CardProps {
  to: string;
  title: string;
  image?: string;
}

const FALLBACK_IMAGE = '/assets/site/thaigigabike.jpg';

export function Card({ to, title, image }: CardProps) {
  return (
    <Link to={to} className="card">
      <img className="card__image" src={image ?? FALLBACK_IMAGE} alt={title} loading="lazy" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
}
