interface PhotoGalleryProps {
  title: string;
  images: string[];
}

export function PhotoGallery({ title, images }: PhotoGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="photo-gallery">
      {images.map((src, index) => (
        <img
          key={src}
          className="photo-gallery__image"
          src={src}
          alt={`${title} - รูปที่ ${index + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}
