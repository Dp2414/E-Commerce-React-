//

import React from 'react'

const EleCard = ({ Ele }) => {
  return (
    <div
      className=" d-flex flex-wrap "
      style={{
        width: "300px",
      }}
    >
      <img
        src={Ele.image}
        alt={Ele.title}
        style={{ width:"100%", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
};

export default EleCard
