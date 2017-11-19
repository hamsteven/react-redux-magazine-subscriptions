import types from '../constants/constants';

let subscriberId = 0;

const nextId = () => {
  subscriberId += 1;
  return subscriberId;
};

const actions = {
  submitSubscriber(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text,
    };
  },

  inputChanged(inputText) {
    return {
      type: types.INPUT_CHANGED,
      inputText,
    };
  },
};

export default actions;
