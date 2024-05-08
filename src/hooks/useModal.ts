import { useState } from 'react';

const useModal = <K, T>(
  initialValue: K
): { modal: K; open: (param: T) => void; close: () => void } => {
  const [modal, setModal] = useState<K>(initialValue);

  const open = (imageData: T): void =>
    setModal((prevModal) => ({
      ...prevModal,
      visible: true,
      image: imageData,
    }));

  const close = (): void =>
    setModal((prevModal) => ({ ...prevModal, visible: false, image: null }));

  return { modal, open, close };
};

export default useModal;
