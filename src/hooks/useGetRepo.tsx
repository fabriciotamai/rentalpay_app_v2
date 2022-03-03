import {useEffect, useState} from 'react';
import api from '../services/api';

export function useGetRepo<T = unknown>(url: string) {
  const [data, setDate] = useState<T | null>(null);

  useEffect(() => {
    api.get(url).then(response => {
      setData(response.data);
    });
  }, []);
}
