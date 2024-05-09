import ReactModal from 'react-modal';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { IImageModalProps } from 'types';

import style from '../ImageModal/ImageModal.module.css';

const ImageModal: React.FC<IImageModalProps> = ({
  image,
  isOpen,
  closeModal,
}): React.ReactElement => {
  ReactModal.setAppElement('#root');

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContainer}
      bodyOpenClassName={style.noScroll}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}>
      <div className={style.imageWrapper} onContextMenu={handleContextMenu}>
        {image && (
          <img
            className={style.modalImage}
            src={image.urls.regular}
            alt={image.alt_description}
            onClick={closeModal}
            onContextMenu={handleContextMenu}
          />
        )}
        <span className={style.modalClose} onClick={closeModal}>
          <IoCloseCircleOutline size={24} />
        </span>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
