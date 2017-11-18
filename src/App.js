import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/add-todo';
import TodoList from './components/todo-list';
import actions from './actions/actions';
import './App.css';

export const App = ({
    submitTodo,
    todos,
    inputChanged,
    disableAddTodo,
  }) => (
    <div>
      <h1>Todo list</h1>

      <h2>Subscriptions</h2>
      <AddTodo
        submitTodo={submitTodo}
        inputChanged={inputChanged}
        disableAddTodo={disableAddTodo}
      />

      <TodoList
        todos={todos}
      />
    </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
