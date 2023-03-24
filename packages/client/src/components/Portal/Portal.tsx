import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './types';

export const Portal = ({ children }: PortalProps) => {
  const portal = document.getElementById('portal')!;
  const element = document.createElement('div');

  const createElement = useCallback(() => {
    portal.appendChild(element);
  }, [element, portal]);

  const removeElement = useCallback(() => {
    portal.removeChild(element);
  }, [element, portal]);

  useEffect(() => {
    createElement();

    return () => removeElement();
  }, [createElement, removeElement]);

  return createPortal(children, element);
};

export default Portal;
