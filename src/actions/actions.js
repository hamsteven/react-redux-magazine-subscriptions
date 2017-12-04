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
    
    // magazines.setKeywordsForMagazines('Vogue', 'butts');
      

    return {
      type: types.SUBMIT_SUBSCRIBER,
      id: nextId(),
      text,
    };
  },

  changeQualities(text) {
    // text = 'test';
    // find magazine that goes with keywords
    const magazines = new Magazines();    
    magazines.setKeywordsForMagazines('Vogue', 'butts');
      
    // const myObj = { 'hi': 'there'};

    return {
      type: types.CHANGE_QUALITIES,
      id: nextId(),
      text,
      // myObj,
    };
  },

  inputChanged(inputText) {
    return {
      type: types.INPUT_CHANGED,
      inputText,
    };
  },

  inputQualitiesChanged(inputText) {
    return {
      type: types.INPUT_QUALITIES_CHANGED,
      inputText,
    };
  },
};

export default actions;
