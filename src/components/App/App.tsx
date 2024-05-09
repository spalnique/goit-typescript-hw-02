import { useState, useEffect, useRef, useCallback } from 'react';

import {
  ErrorMessage,
  ImageGallery,
  ImageModal,
  LoadMoreBtn,
  Loader,
  SearchBar,
} from 'components';
import { usePages, useModal } from 'hooks';
import { Photos } from 'types';
import { getPhotos } from 'api';

const App: React.FC = (): React.ReactNode => {
  const [request, setRequest] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photos | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { page, totalPages, resetPage, nextPage, resetTotal, setTotal } =
    usePages();
  const { modal, open, close } = useModal();

  const headerElemRef = useRef<HTMLElement | null>(null);

  const getHeaderHeight = useCallback(() => {
    if (!headerElemRef.current) return 0;
    return headerElemRef.current.getBoundingClientRect().height;
  }, []);

  const onSubmit = (userInput: string): void => {
    if (userInput === request) return;
    setError(false);
    setPhotos(null);
    resetTotal();
    resetPage();
    setRequest(userInput);
  };

  useEffect(() => {
    if (!request) return;
    const fetchPhotos = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await getPhotos(request, page);
        setTotal(response.total_pages);
        setPhotos((prev) =>
          prev ? [...prev, ...response.results] : [...response.results]
        );
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [request, page, setTotal]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} ref={headerElemRef} />

      {error && <ErrorMessage />}

      {Array.isArray(photos) &&
        (photos.length ? (
          <ImageGallery
            images={photos}
            onImageClick={open}
            getHeaderHeight={getHeaderHeight}
          />
        ) : (
          <p>Oops! Nothing found...</p>
        ))}

      {loading ? (
        <Loader />
      ) : (
        page < totalPages && <LoadMoreBtn onClick={nextPage} />
      )}
      {modal.image && (
        <ImageModal
          isOpen={modal.visible}
          image={modal.image}
          closeModal={close}
        />
      )}
    </>
  );
};

export default App;
