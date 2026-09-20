import { shopInfo } from '@/data/shopInfo';

/**
 * Three real builds the shop has photographed, the same idea as the banner strip
 * on the old site's homepage - just without the scrolling GIFs and clutter
 * around it. Picked by hand for a clean full-bike shot, not tied to the
 * per-category thumbnail (which favours a close-up part photo instead).
 */
const heroPhotos = [
  { src: '/assets/bikes/official/of1.jpg', alt: 'Yamaha SR แต่งโดย Giga Bike' },
  { src: '/assets/bikes/honda%20cb750/CB750_69.jpg', alt: 'Honda CB750 แต่งโดย Giga Bike' },
  { src: '/assets/bikes/Triumph/triumph-thrux.jpg', alt: 'Triumph Thruxton แต่งโดย Giga Bike' },
];

export function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__photos">
        {heroPhotos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} loading="eager" />
        ))}
      </div>
      <p className="hero-banner__tagline">{shopInfo.tagline}</p>
    </div>
  );
}
