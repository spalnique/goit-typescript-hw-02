import style from '../LoadMoreBtn/LoadMoreBtn.module.css';

interface IProps {
  onClick: VoidFunction;
}

const LoadMoreBtn: React.FC<IProps> = ({ onClick }): React.ReactNode => {
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
