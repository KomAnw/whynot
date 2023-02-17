import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './types';

export const Portal = ({ children }: PortalProps) => {
  const portal = document.getElementById('portal')!;
  const element = document.createElement('div');

  function createElement() {
    portal.appendChild(element);
  }

  function removeElement() {
    portal.removeChild(element);
  }

  useEffect(() => {
    createElement();

    return () => removeElement();
  }, [element, portal]);

  return createPortal(children, element);
};

export default Portal;