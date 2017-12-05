import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddSubscriber from './components/add-subscriber';
import ChangeQualities from './components/change-qualities';
import SubscriberList from './components/subscriber-list';
import MagazineList from './components/magazine-list';
import AffectedSubscriberList from './components/affected-subscriber-list';
import actions from './actions/actions';
import './App.css';

export const App = ({
    submitSubscriber,
    subscribers,
    inputChanged,
    disableAddSubscriber,
    changeQualities,
    qualities,
    inputQualitiesChanged,    
    affectedSubscribers,
    disableChangeQualities,  
    magazines  
  }) => (
    <div>
      <h1>Magazine Subscriber Tool</h1>

      <h2>Subscriptions</h2>
      <AddSubscriber
        submitSubscriber={submitSubscriber}
        inputChanged={inputChanged}
        disableAddSubscriber={disableAddSubscriber}
      />

      <SubscriberList
        subscribers={subscribers}
      />

      <ChangeQualities
        changeQualities={changeQualities}
        inputQualitiesChanged={inputQualitiesChanged}
        disableChangeQualities={disableChangeQualities}        
      />

      <AffectedSubscriberList
        affectedSubscribers={affectedSubscribers}
      />

      <MagazineList
        magazines={magazines}
      />

    </div>
);

App.propTypes = {
  submitSubscriber: PropTypes.func.isRequired,
  subscribers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      retObj: PropTypes.object.isRequired,
    },
  )).isRequired,
  changeQualities: PropTypes.func.isRequired,
  qualities: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  affectedSubscribers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  inputQualitiesChanged: PropTypes.func.isRequired,
  disableChangeQualities: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.subscriberListApp;

// const mapStateToProps = state => {
//   state.subscriberListApp;
// }

// function mapStateToProps(state, ownProps) {
//   return {
//     magazines: state.magazines
//   };
// }

const mapDispatchToProps = dispatch => ({
  submitSubscriber: (obj) => {
    if (obj) {
      dispatch(actions.submitSubscriber(obj));
    }
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },

  changeQualities: (text) => {
    if (text) {
      dispatch(actions.changeQualities(text));
    }
  },

  inputQualitiesChanged: (text) => {
    dispatch(actions.inputQualitiesChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
