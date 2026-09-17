import { Link } from 'react-router-dom';

interface CardProps {
  to: string;
  title: string;
  image?: string;
}

export function Card({ to, title, image }: CardProps) {
  return (
    <Link to={to} className="card">
      {image ? (
        <img className="card__image" src={image} alt={title} loading="lazy" />
      ) : (
        <div className="card__image card__image--placeholder" aria-hidden="true" />
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
}
