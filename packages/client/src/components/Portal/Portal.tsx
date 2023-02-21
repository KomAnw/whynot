import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { PortalProps } from './types';

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

  return createPortal(<Wrapper> {children} </Wrapper>, element);
};

const Wrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Portal;
