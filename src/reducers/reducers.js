import types from '../constants/constants';

export const initialState = {
  todos: [],
  disableAddTodo: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
        disableAddTodo: true,
      };

    case types.INPUT_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          disableAddTodo: false,
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
