import { FC } from 'react';
import style from '../LoadMoreBtn/LoadMoreBtn.module.css';

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: FC<Props> = ({ onClick }) => {
  const handleClick = (): void => {
    onClick();
  };

  return (
    <button className={style.loadmoreButton} onClick={handleClick}>
      Loadmore
    </button>
  );
};

export default LoadMoreBtn;
