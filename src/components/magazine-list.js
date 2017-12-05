import React from 'react';
import Data from '../classes/data-service';
import Table from 'rc-table';
import styled from 'styled-components';
import 'rc-table/assets/index.css';

const MagazineList = () => {
  const columns = [{
    title: 'Title', dataIndex: 'magazineName', key: 'magazineName', width: 100,
  }, {
    title: 'Qualities', dataIndex: 'keywords', key: 'qualities', width: 200,
  }];


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
    // <Table columns={columns1} data={data} />
    <div>
      <h2>Magazines</h2>
      <Table columns={columns} data={Data.magazines} components={components} />
    </div>
  );
};

export default MagazineList;

// import React from 'react';
// import Data from '../classes/data-service';
// import Table from 'rc-table';

// const MagazineList = () => {
//   const magazineItems = Data.magazines.map(magazine => (
//     <li key={magazine.id}>
//       <span className="magazine-text">
//         {magazine.magazineName}: {magazine.keywords}
//         {console.log(`Magazine${magazine.id}: ${JSON.stringify(magazine)}`)}
//       </span>
//     </li>
//   ));

//   return (
//     <ul>
//       {magazineItems}
//     </ul>
//   );
// };

// export default MagazineList;
