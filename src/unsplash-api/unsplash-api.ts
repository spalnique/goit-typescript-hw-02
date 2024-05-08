import axios from 'axios';

export const perPage: number = 15;

export const getPhotos = async <T>(query: string, page: number): Promise<T> => {
  const response: { data: T } = await axios.get(`?query=${query}&page=${page}`);
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
