const initialState = {
  loading: false,
};

const reducer = (
  state = initialState,
  action: {type: string; payload: {loading: boolean}},
) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default reducer;
