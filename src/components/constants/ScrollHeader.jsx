import { useEffect } from 'react';

function ScrollHeader({ setScroll }) {
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScroll]);

  return null;
}

export default ScrollHeader;
