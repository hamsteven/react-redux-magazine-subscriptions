import React from 'react';
import PropTypes from 'prop-types';
import { Control, Form } from 'react-redux-form';

const AddSubscriber = ({ submitSubscriber, inputChanged, disableAddSubscriber }) => {
  let input;

  return (
    <div>

      {/* <Form model="user" onSubmit={v => console.log(v)}>
        <div className="field">
          <label>First name:</label>
          <Control.text model="user.firstName" />
        </div>

        <div className="field">
          <label>Last name:</label>
          <Control.text model="user.lastName" />
        </div>

        <button type="submit">
          Submit (check console)
        </button>
      </Form> */}


      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitSubscriber(input.value);
          input.value = '';
        }}
      >

        <input
          className="subscriber-input-name"
          ref={(elementName) => {
            input = elementName;
          }}
          onChange={() => inputChanged(input.value)}
          placeholder="User..."
        />

        <input
          className="subscriber-input"
          ref={(element) => {
            input = element;
          }}
          onChange={() => inputChanged(input.value)}
          placeholder="Interests..."
        />

        <button
          type="submit"
          className="subscriber-submit"
          disabled={disableAddSubscriber}
        >
          Add Subscriber
        </button>

      </form>
    </div>
  );
};

AddSubscriber.propTypes = {
  submitSubscriber: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddSubscriber: PropTypes.bool.isRequired,
};

export default AddSubscriber;
 