import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'https://ya-praktikum.tech/api/v2',
  credentials: 'include',
  timeout: 5000,
});
