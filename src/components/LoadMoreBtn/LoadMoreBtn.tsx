import { ILoadMoreProps } from 'types';

import style from '../LoadMoreBtn/LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<ILoadMoreProps> = ({
  onClick,
}): React.ReactNode => {
  const handleClick: VoidFunction = () => {
    onClick();
  };

  return (
    <button className={style.loadmoreButton} onClick={handleClick}>
      Loadmore
    </button>
  );
};

export default LoadMoreBtn;
