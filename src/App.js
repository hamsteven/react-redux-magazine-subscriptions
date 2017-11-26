import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddSubscriber from './components/add-subscriber';
import SubscriberList from './components/subscriber-list';
import actions from './actions/actions';
import './App.css';

export const App = ({
    submitSubscriber,
    subscribers,
    inputChanged,
    disableAddSubscriber,
  }) => (
    <div>
      <h1>Subscriber list</h1>

      <h2>Subscriptions</h2>
      <AddSubscriber
        submitSubscriber={submitSubscriber}
        inputChanged={inputChanged}
        disableAddSubscriber={disableAddSubscriber}
      />

      <SubscriberList
        subscribers={subscribers}
      />
    </div>
);

App.propTypes = {
  submitSubscriber: PropTypes.func.isRequired,
  subscribers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddSubscriber: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.subscriberListApp;

// function mapStateToProps(state, ownProps) {
//   return {
//     magazines: state.magazines
//   };
// }

const mapDispatchToProps = dispatch => ({
  submitSubscriber: (text) => {
    if (text) {
      dispatch(actions.submitSubscriber(text));
    }
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
