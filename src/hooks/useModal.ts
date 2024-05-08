import { useState } from 'react';
import { IPhoto } from '../components/App/App.types';

interface IModalState {
  visible: boolean;
  image: IPhoto | null;
}

interface IReturn {
  modal: IModalState;
  open: (arg: IPhoto) => void;
  close: VoidFunction;
}

const useModal = (): IReturn => {
  const [modal, setModal] = useState<IModalState>({
    visible: false,
    image: null,
  });

  const open = (imageData: IPhoto) =>
    setModal((prevModal) => ({
      ...prevModal,
      visible: true,
      image: imageData,
    }));

  const close = () =>
    setModal((prevModal) => ({ ...prevModal, visible: false, image: null }));

  return { modal, open, close };
};

export default useModal;
