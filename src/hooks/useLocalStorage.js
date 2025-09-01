import { useCallback } from 'react';

export default function useLocalStorage(key, initialValue){
  const getStored = useCallback(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return initialValue;
      return JSON.parse(raw);
    } catch (e) {
      console.warn('localStorage read failed', e);
      return initialValue;
    }
  }, [key, initialValue]);

  const setStored = useCallback((val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.log('localStorage write failed', e);
    }
  }, [key]);

  return [ getStored(), setStored ];
}
