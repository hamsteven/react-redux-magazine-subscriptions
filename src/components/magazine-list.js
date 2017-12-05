import React from 'react';
import PropTypes from 'prop-types';

const MagazineList = ({ magazines }) => {
    console.log(`MagazineList.magazines: ${JSON.stringify(magazines)}`);
    const magazineItems = magazines.map(magazine => (
    <li key={magazine.id}>
        <span className="magazine-text">
          {magazine.retObj.username}: {magazine.retObj.magazines}
          {console.log(`Magazine${magazine.id}: ${JSON.stringify(magazine)}`)}
          {/* {magazine.magazines} */}
        </span>
    </li>
  ));

  return (
    <ul>
      {magazineItems}
    </ul>
  );
};

MagazineList.propTypes = {
  magazines: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      retObj: PropTypes.object.isRequired,
    },
  )).isRequired,
};

export default MagazineList;
