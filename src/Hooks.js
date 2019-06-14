import { useState, useEffect, useCallback } from 'react';


// Credit to Gabe Ragland @ https://usehooks.com
export const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryLists, defaultValue, values]);
  const [value, setValue] = useState(getValue());
  useEffect(
    () => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [mediaQueryLists, setValue, getValue] 
  );
  return value;
}