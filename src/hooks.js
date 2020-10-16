import { useEffect } from 'react';

export function useScrollToTop(dependencyList) {
  dependencyList = Array.isArray(dependencyList) ? dependencyList : [];
  useEffect(() => {
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);
}