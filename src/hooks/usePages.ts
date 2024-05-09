import { useCallback, useState } from 'react';

import { IPagesProps, IPagesState } from 'types';

export const usePages = (
  pages: IPagesState = { initPage: 1, initTotal: 0 }
): IPagesProps => {
  const [page, setPage] = useState<number>(pages.initPage);
  const [totalPages, setTotalPages] = useState<number>(pages.initTotal);

  const resetPage = () => setPage(1);
  const nextPage = () => setPage((page) => page + 1);

  const resetTotal = () => setTotalPages(0);
  const setTotal = useCallback((value: number) => setTotalPages(value), []);

  return { page, totalPages, resetPage, nextPage, resetTotal, setTotal };
};
