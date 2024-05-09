// data types

export interface IPhoto {
  id: string;
  alt_description: string;
  urls: { [prop: string]: string };
  [prop: string]: unknown;
}

export type Photos = IPhoto[];

// api response types

export interface IUnsplashResponse {
  results: Photos;
  total: number;
  total_pages: number;
}

export interface IgetPhotos {
  (p1: string, p2: number): Promise<IUnsplashResponse>;
}
