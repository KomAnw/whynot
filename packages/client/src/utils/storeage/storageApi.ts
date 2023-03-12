import { profileData, registrationData } from './constants';

export const storageSetItem = (key: string, value: string) => {
  return window.localStorage.setItem(key, value);
};

const storageRemoveItem = (key: string) => {
  return window.localStorage.removeItem(key);
};

export const storageClearProfileData = (type: string) => {
  if (type === 'profileData') {
    profileData.forEach(item => storageRemoveItem(item));
  }
  if (type === 'registrationData') {
    registrationData.forEach(item => storageRemoveItem(item));
  }

  return window.localStorage.clear();
};
