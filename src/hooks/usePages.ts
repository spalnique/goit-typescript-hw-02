import { useCallback, useState } from 'react';

interface PagesState {
  initPage: number;
  initTotal: number;
}

interface PagesReturn {
  page: number;
  totalPages: number;
  resetPage: () => void;
  nextPage: () => void;
  resetTotal: () => void;
  setTotal: (param: number) => void;
}

const usePages = (
  pages: PagesState = { initPage: 1, initTotal: 0 }
): PagesReturn => {
  const [page, setPage] = useState<number>(pages.initPage);
  const [totalPages, setTotalPages] = useState<number>(pages.initTotal);

  const resetPage = useCallback(() => setPage(1), []);
  const nextPage = useCallback(() => setPage((page) => page + 1), []);

  const resetTotal = useCallback(() => setTotalPages(0), []);
  const setTotal = useCallback((value: number) => setTotalPages(value), []);

  return { page, totalPages, resetPage, nextPage, resetTotal, setTotal };
};

export default usePages;
