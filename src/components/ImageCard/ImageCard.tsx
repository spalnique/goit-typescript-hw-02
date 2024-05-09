import { IImageCardProps } from 'types';

import style from '../ImageCard/ImageCard.module.css';

const ImageCard: React.FC<IImageCardProps> = ({
  image,
  onClick,
}): React.ReactNode => {
  const handleClick: VoidFunction = () => {
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
