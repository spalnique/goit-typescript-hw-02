import { useState } from 'react';

import { IModalProps, IModalState, IPhoto } from 'types';

export const useModal = (): IModalProps => {
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
