import types from '../constants/constants';

export const initialState = {
  subscribers: [],
  qualities: [],
  affectedSubscribers: [],
  disableAddSubscriber: true,
  disableChangeQualities: true,
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

    case types.CHANGE_QUALITIES:
    return {
      ...state,
      affectedSubscribers: [
        ...state.affectedSubscribers,
        {
          id: action.id,
          text: action.text,            
        },
      ],
      disableChangeQualities: true,
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
      
    case types.INPUT_QUALITIES_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          disableChangeQualities: false,
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
