import React from 'react';
import PropTypes from 'prop-types';

// const AddSubscriber = ({ submitSubscriber, inputChanged, disableAddSubscriber }) => {
const ChangeQualities = ({ changeQualities, inputQualitiesChanged, disableChangeQualities }) => {
    let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          changeQualities(input.value);
          input.value = '';
        }}
      >

        <input
          className="qualities-input"
          ref={(element) => {
            input = element;
          }}
          onChange={() => inputQualitiesChanged(input.value)}
          placeholder="Qualities..."
        />

        <button
          type="submit"
          className="qualities-submit"
          disabled={disableChangeQualities}
        >
          Change Qualities
        </button>

      </form>
    </div>
  );
};

ChangeQualities.propTypes = {
  changeQualities: PropTypes.func.isRequired,
  inputQualitiesChanged: PropTypes.func.isRequired,
  disableChangeQualities: PropTypes.bool.isRequired,
};

export default ChangeQualities;
 