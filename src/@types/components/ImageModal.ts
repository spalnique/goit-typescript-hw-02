import { IPhoto } from 'types';

export interface IImageModalProps {
  image: IPhoto;
  isOpen: boolean;
  closeModal: VoidFunction;
}
