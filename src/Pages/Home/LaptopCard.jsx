import React from 'react'

const LaptopCard = ({Laptop}) => {
  return (
    <div
      className=" d-flex flex-wrap "
      style={{
        width: "300px",
     
      }}
    >
      <img
        src={Laptop.image}
        alt={Laptop.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
    
    </div>
  );
}

export default LaptopCard
