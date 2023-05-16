import { useEffect } from 'react';

const useLockBodyScroll = (isHidden: boolean) => {
  useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isHidden]);
};

export default useLockBodyScroll;
