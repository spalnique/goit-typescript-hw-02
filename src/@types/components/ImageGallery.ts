import { IPhoto, Photos } from 'types';

export interface IImageGalleryProps {
  images: Photos;
  onImageClick: (param: IPhoto) => void;
  getHeaderHeight: () => number;
}
