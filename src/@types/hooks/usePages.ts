export interface IPagesState {
  initPage: number;
  initTotal: number;
}

export interface IPagesProps {
  page: number;
  totalPages: number;
  resetPage: VoidFunction;
  nextPage: VoidFunction;
  resetTotal: VoidFunction;
  setTotal: (param: number) => void;
}
