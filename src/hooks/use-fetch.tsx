import { useEffect, useState } from 'react';

const cache = new Map<string, any>();

type UseFetchProps<T = unknown> = {
  key: string | string[];
  fetcher: () => Promise<T>;
  enabled?: boolean;
};

export function useFetch<T = unknown>({
  key,
  fetcher,
  enabled = true,
}: UseFetchProps<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchData = ({ refetch }: { refetch?: boolean }) => {
    if (!refetch) {
      const cachedData = cache.has(key.toString())
        ? (cache.get(key.toString()) as T)
        : undefined;

      if (cachedData) {
        setData(cachedData);
        setIsLoading(false);
        return;
      }
    }

    fetcher()
      .then((res) => {
        setData(res);
        cache.set(key.toString(), res);
      })
      .catch((err) => {
        setError(err.message);
        cache.set(key.toString(), undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Essa variável é usada para evitar "race conditions"
    // @link: https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
    let ignore = false;
    setIsLoading(true);

    if (!ignore && enabled) {
      fetchData({ refetch: false });
    }

    return () => {
      ignore = true;
    };
  }, [enabled]);

  return {
    data,
    isLoading,
    error,
    refetch: () => fetchData({ refetch: true }),
  };
}
