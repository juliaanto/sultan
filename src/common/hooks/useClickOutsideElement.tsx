import { useEffect } from 'react';

const useClickOutsideElement = (ref: React.RefObject<HTMLInputElement>, handler: any) => {
  useEffect(() => {
    const listener = (evt: any): void => {
      if (!ref.current || ref.current.contains(evt.target)) {
        return;
      }
      handler(evt);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutsideElement;
