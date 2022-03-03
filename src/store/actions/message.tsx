export const setMessage = (message: {title: string; text: string}) => {
  return {
    type: 'SET_MESSAGE',
    payload: message,
  };
};
