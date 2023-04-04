import { YANDEX_API_URL, API_URL } from 'src/api/common/consts/apiConsts';

export const getBaseURL = (baseURL: string) => new URL('', baseURL).href;

export const getYandexURL = (url: string) => new URL(url, getBaseURL(`${YANDEX_API_URL}/`)).href;

export const getURL = (url: string) => new URL(url, getBaseURL(`${API_URL}/`)).href;
