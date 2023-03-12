export const storageGetItem = (key: string) => {
  const item = window.localStorage.getItem(key);

  return JSON.parse(item!);
};

export const storageSetItem = (key: string, value: string) => {
  return window.localStorage.setItem(key, value);
};

export const storageRemoveItem = (key: string) => {
  return window.localStorage.removeItem(key);
};

export const storageClear = () => {
  return window.localStorage.clear();
};
