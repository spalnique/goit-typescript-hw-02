import { IPhoto } from '../App/App.types';

import style from '../ImageCard/ImageCard.module.css';

interface IProps {
  image: IPhoto;
  onClick: (param: IPhoto) => void;
}

const ImageCard: React.FC<IProps> = ({ image, onClick }): React.ReactNode => {
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
