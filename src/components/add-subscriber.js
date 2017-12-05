import React from 'react';
import PropTypes from 'prop-types';
import { Control, Form } from 'react-redux-form';

const AddSubscriber = ({ submitSubscriber, inputChanged, disableAddSubscriber }) => {
  // let input;

  return (
    <div>
      <Form model="deep.user" 
        onSubmit={ v => {
          submitSubscriber(v);
          // input.value = '';
        }}
      >
        <div className="field">
          {/* <label>Username:</label> */}
          <Control.text model="deep.user.username" placeholder="Username"/>
        </div>

        <div className="field">
          {/* <label>Interests:</label> */}
          <Control.text model="deep.user.interests" placeholder="Interests"/>
        </div>

        <button type="submit">
          Add Subscriber
        </button>
      </Form>


      {/* <form
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

      </form> */}
    </div>
  );
};

AddSubscriber.propTypes = {
  submitSubscriber: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddSubscriber: PropTypes.bool.isRequired,
};

export default AddSubscriber;
 