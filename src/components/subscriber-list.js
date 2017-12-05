import React from 'react';
import PropTypes from 'prop-types';
import Table from 'rc-table';
import styled from 'styled-components';
import 'rc-table/assets/index.css';

const SubscriberList = ({ subscribers }) => {
  const columns = [{
    title: 'User', dataIndex: 'retObj.username', key: 'User', width: 100,
  }, {
    title: 'Magazines', dataIndex: 'retObj.magazines', key: 'Magazines', width: 200,
  }];

  // console.log(`SubscriberList.subscribers: ${JSON.stringify(subscribers)}`);
  // const subscriberItems = subscribers.map(subscriber => (
  //   <li key={subscriber.id}>
  //       <span className="subscriber-text">
  //         {subscriber.retObj.username}: {subscriber.retObj.magazines}
  //         {console.log(`Subscriber${subscriber.id}: ${JSON.stringify(subscriber)}`)}
  //       </span>
  //   </li>
  // ));

  const BodyRow = styled.tr`
  &:hover {
    background: paleblue !important;
  }
  `;
  
    const components = {
      body: {
        row: BodyRow,
      },
    };


  return (
    // <ul>
    //   {subscriberItems}
    // </ul>
    <Table columns={columns} data={subscribers} components={components} />
    
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
