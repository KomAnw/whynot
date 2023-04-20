/* eslint-disable no-restricted-globals */
export default (() => {
  const globalSelf: typeof globalThis = globalThis;

  if (typeof self === 'undefined') {
    (globalSelf as any).self = globalSelf;
  }
})();
