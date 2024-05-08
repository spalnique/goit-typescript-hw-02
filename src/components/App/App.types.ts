export interface IPhoto {
  id: string;
  alt_description: string;
  urls: { [prop: string]: string };
  [prop: string]: unknown;
}

export type Photos = IPhoto[];
