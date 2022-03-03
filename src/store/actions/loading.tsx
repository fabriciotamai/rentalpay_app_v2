export const setLoading = (loading: {loading: boolean}) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  };
};
