import types from '../constants/constants';

export const initialState = {
  subscribers: [],
  disableAddSubscriber: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_SUBSCRIBER:
      return {
        ...state,
        subscribers: [
          ...state.subscribers,
          {
            id: action.id,
            // text: 'hi',
            // magazines: 'vogue',
            text: action.text,            
          },
        ],
        disableAddSubscriber: true,
      };

    case types.INPUT_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          disableAddSubscriber: false,
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
