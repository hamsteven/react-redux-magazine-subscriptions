import types from '../constants/constants';
import Magazines from '../classes/magazines'

let subscriberId = 0;

const nextId = () => {
  subscriberId += 1;
  return subscriberId;
};

// Action Creators
const actions = {
  submitSubscriber(text) {
    // text = 'test';
    // find magazine that goes with keywords
    const magazines = new Magazines();
    const matchingMagazines = magazines.getMagazinesForKeywords(text);

    console.log(`matchingMagazines=${matchingMagazines}`);
    

    return {
      type: types.SUBMIT_SUBSCRIBER,
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
