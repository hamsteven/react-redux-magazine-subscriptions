import React from 'react';
import PropTypes from 'prop-types';

const AddSubscriber = ({ submitSubscriber, inputChanged, disableAddSubscriber }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitSubscriber(input.value);
          input.value = '';
        }}
      >

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
 