import { FC } from 'react';
import style from '../ImageCard/ImageCard.module.css';
import { Photo } from '../App/App.types';

type Props = {
  image: Photo;
  onClick: (obj: Photo) => void;
};

const ImageCard: FC<Props> = ({ image, onClick }) => {
  const handleClick = (): void => {
    onClick(image);
  };

  return (
    <div className={style.cardWrapper}>
      <img
        className={style.cardImage}
        src={image.urls?.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
