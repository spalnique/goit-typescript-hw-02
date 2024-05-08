import { useCallback, useState } from 'react';

interface IPagesState {
  initPage: number;
  initTotal: number;
}

interface IReturn {
  page: number;
  totalPages: number;
  resetPage: VoidFunction;
  nextPage: VoidFunction;
  resetTotal: VoidFunction;
  setTotal: (param: number) => void;
}

const usePages = (
  pages: IPagesState = { initPage: 1, initTotal: 0 }
): IReturn => {
  const [page, setPage] = useState<number>(pages.initPage);
  const [totalPages, setTotalPages] = useState<number>(pages.initTotal);

  const resetPage = useCallback(() => setPage(1), []);
  const nextPage = useCallback(() => setPage((page) => page + 1), []);

  const resetTotal = useCallback(() => setTotalPages(0), []);
  const setTotal = useCallback((value: number) => setTotalPages(value), []);

  return { page, totalPages, resetPage, nextPage, resetTotal, setTotal };
};

export default usePages;
