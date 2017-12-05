import React from 'react';
import PropTypes from 'prop-types';

const SubscriberList = ({ subscribers }) => {
    console.log(`SubscriberList.subscribers: ${JSON.stringify(subscribers)}`);
    const subscriberItems = subscribers.map(subscriber => (
    <li key={subscriber.id}>
        <span className="subscriber-text">
          {subscriber.retObj.username}: {subscriber.retObj.magazines}
          {console.log(`Subscriber${subscriber.id}: ${JSON.stringify(subscriber)}`)}
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
      retObj: PropTypes.object.isRequired,
    },
  )).isRequired,
};

export default SubscriberList;
