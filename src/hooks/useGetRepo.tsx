import {useEffect, useState} from 'react';
import api from '../services/api';
import {setLoading} from '../store/actions/loading';
import {useDispatch} from 'react-redux';

export function useGetRepo<T = unknown>(url: string) {
  const dispatch = useDispatch();
  const [data, setDate] = useState<T | null>(null);

  useEffect(() => {
    api
      .get(url)
      .then(response => {
        setDate(response.data);
      })
      .catch(error => {
        dispatch(setLoading({loading: false}));
      })
      .finally(() => dispatch(setLoading({loading: false})));
  }, []);
}
