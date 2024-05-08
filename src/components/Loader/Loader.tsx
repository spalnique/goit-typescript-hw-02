import { DNA } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <DNA
        visible={true}
        height="37"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{ marginBottom: '30px' }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
