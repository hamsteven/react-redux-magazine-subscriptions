import React from 'react';
import PropTypes from 'prop-types';

const SubscriberList = ({ subscribers }) => {
    const subscriberItems = subscribers.map(subscriber => (
    <li key={subscriber.id}>
        <span className="subscriber-text">
          {subscriber.text}: 
          {/* {subscriber.magazines} */}
        </span>
    </li>
  ));

  return (
    <ul>
      {subscriberItems}
    </ul>
  );
};

SubscriberList.propTypes = {
  subscribers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default SubscriberList;
