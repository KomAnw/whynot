import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import React from 'react';

interface TypeProps {
  children: React.ReactNode;
}

type TypeFun = () => void;

export const Portal = ({ children }: TypeProps) => {
  const mount = document.getElementById('portal');
  const el = document.createElement('div');

  useEffect((): TypeFun => {
    mount!.appendChild(el);

    return () => mount!.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
