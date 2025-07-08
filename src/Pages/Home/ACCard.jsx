import React from 'react'

const ACCard = ({Ac}) => {
  return (
    <div
      className=" d-flex flex-wrap "
      style={{
        width: "300px",
      }}
    >
      <img
        src={Ac.image}
        alt={Ac.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
}

export default ACCard
