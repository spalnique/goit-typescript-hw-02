import { IPhoto } from 'types';

export interface IImageCardProps {
  image: IPhoto;
  onClick: (param: IPhoto) => void;
}
