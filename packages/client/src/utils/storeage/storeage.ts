export const saveToLocalStorage = (e: any) => {
  const name = e.target.getAttribute('name');
  const { value } = e.target;

  window.localStorage.setItem(name, value);
};
