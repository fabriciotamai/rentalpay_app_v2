const initialState = {
  title: '',
  text: '',
};

const reducer = (
  state = initialState,
  action: {type: string; payload: {title: string; text: string}},
) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

export default reducer;
