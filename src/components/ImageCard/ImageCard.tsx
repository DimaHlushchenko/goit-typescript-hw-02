import React from 'react';
import { Image } from '../../types/Image';  // Імпортуємо інтерфейс
import s from './ImageCard.module.css';

interface ImageCardProps {
  image: Pick<Image, 'urls' | 'alt_description'>;  // Використовуємо тільки потрібні властивості
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;