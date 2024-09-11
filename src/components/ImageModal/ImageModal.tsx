import React from 'react';
import { Image } from '../../types/Image';  // Імпортуємо інтерфейс

interface ImageModalProps {
  image: Image;  // Використання повного інтерфейсу
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageModal;