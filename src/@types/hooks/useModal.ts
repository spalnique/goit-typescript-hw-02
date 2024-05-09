import { IPhoto } from 'types';

export interface IModalState {
  visible: boolean;
  image: IPhoto | null;
}

export interface IModalProps {
  modal: IModalState;
  open: (arg: IPhoto) => void;
  close: VoidFunction;
}
