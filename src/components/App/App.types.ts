export type Photo = {
  id: string;
  alt_description: string;
  urls: { [prop: string]: string };
  [prop: string]: unknown;
};
export type Photos = Photo[];
export type Response = {
  results: Photos;
  total: number;
  total_pages: number;
};
export type ModalState = { visible: boolean; image: Photo | null };
