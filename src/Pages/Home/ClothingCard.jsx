import React from 'react'

const ClothingCard = ({Cloth}) => {
  return (
    <div
      className=" d-flex flex-wrap "
      style={{
        width: "300px",
      }}
    >
      <img
        src={Cloth.image}
        alt={Cloth.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
}

export default ClothingCard
