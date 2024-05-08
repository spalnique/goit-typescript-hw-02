import axios from 'axios';

import { Photos } from '../components/App/App.types';

interface IResponse {
  results: Photos;
  total: number;
  total_pages: number;
}

interface IAsyncFn {
  (p1: string, p2: number): Promise<IResponse>;
}

export const perPage: number = 15;

export const getPhotos: IAsyncFn = async (query, page) => {
  const response = await axios.get(`?query=${query}&page=${page}`);
  return response.data;
};

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
axios.defaults.headers.common['Authorization'] =
  'Client-ID Dp58Xa1UComz2dxLn_cy8oZ__FmRAVQuQh9y8RX1usI';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.params = {
  per_page: perPage,
  orientation: 'landscape',
};
