import ky, { SearchParamsOption } from 'ky';

interface IRequestParams {
  url: string;
}

interface IGetRequestParams extends IRequestParams {
  params?: SearchParamsOption;
}

interface IPostRequestParams extends IRequestParams {
  params: Record<string, unknown>;
}

type TDeleteRequestParams = IPostRequestParams;

type TPutRequestParams = IPostRequestParams;

export const useApi = () => {
  const api = ky.create({
    prefixUrl: 'https://ya-praktikum.tech/api/v2',
  });

  return {
    get: async ({ url, params }: IGetRequestParams): Promise<unknown> => {
      try {
        return await api.get(url, { searchParams: params }).json();
      } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : 'Something went wrong');
      }
    },

    post: async ({ url, params }: IPostRequestParams): Promise<unknown> => {
      try {
        return await api.post(url, params instanceof FormData ? { body: params } : { json: params }).json();
      } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : 'Something went wrong');
      }
    },

    delete: async ({ url, params }: TDeleteRequestParams): Promise<unknown> => {
      try {
        return await api.delete(url, params instanceof FormData ? { body: params } : { json: params }).json();
      } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : 'Something went wrong');
      }
    },

    put: async ({ url, params }: TPutRequestParams): Promise<unknown> => {
      try {
        return await api.put(url, params instanceof FormData ? { body: params } : { json: params }).json();
      } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : 'Something went wrong');
      }
    },
  };
};
