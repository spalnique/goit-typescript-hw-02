import { useEffect, useRef } from 'react';

import { ImageCard } from 'components';
import { IImageGalleryProps } from 'types';
import { perPage } from 'api';

import style from '../ImageGallery/ImageGallery.module.css';

const ImageGallery: React.FC<IImageGalleryProps> = ({
  images,
  onImageClick,
  getHeaderHeight,
}): React.ReactNode => {
  const galleryRef = useRef<HTMLUListElement>(null);

  const handleContextMenu = (e: React.MouseEvent): void => {
    e.preventDefault();
  };

  useEffect(() => {
    if (images.length > perPage && galleryRef.current) {
      const galleryRowGap = parseInt(
        window.getComputedStyle(galleryRef.current).rowGap
      );
      const headerHeight = getHeaderHeight();
      const galleryElemArr = galleryRef.current.children;
      const targetIndex = galleryElemArr.length - perPage;
      const scrollValue =
        (galleryElemArr[targetIndex] as HTMLElement).offsetTop -
        (headerHeight + galleryRowGap);

      window.scrollTo({
        top: scrollValue,
        behavior: 'smooth',
      });
    }
  }, [images, getHeaderHeight]);

  return (
    <ul
      ref={galleryRef}
      className={style.galleryList}
      onContextMenu={handleContextMenu}>
      {images.map((image) => (
        <li key={image.id} className={style.galleryItem}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
