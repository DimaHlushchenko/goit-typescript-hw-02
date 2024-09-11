import React from 'react';
import { Image } from '../../types/Image';  // Імпортуємо інтерфейс
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];  // Використання інтерфейсу для масиву зображень
  onImageClick: (image: Image) => void;  // Типізація функції
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;