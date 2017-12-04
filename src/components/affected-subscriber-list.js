import React from 'react';
import PropTypes from 'prop-types';

const AffectedSubscriberList = ({ affectedSubscribers }) => {
    const affectedSubscriberItems = affectedSubscribers.map(affectedSubscriber => (
    <li key={affectedSubscriber.id}>
        <span className="affectedSubscriber-text">
          {affectedSubscriber.text}: 
        </span>
    </li>
  ));

  return (
    <ul>
      {affectedSubscriberItems}
    </ul>
  );
};

AffectedSubscriberList.propTypes = {
  affectedSubscribers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default AffectedSubscriberList;
