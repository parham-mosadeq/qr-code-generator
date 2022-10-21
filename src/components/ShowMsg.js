import React from 'react';

const ShowMsg = ({ type, msg }) => {
  return (
    <div className={type === 'suc' ? 'green' : 'red'}>
      <p>{msg}</p>
    </div>
  );
};

export default ShowMsg;
