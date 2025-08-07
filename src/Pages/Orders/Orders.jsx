import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

    
     function clickme() {
       setOrders(() => ["Hello", 1, 2, 3, 4, 32, 6, 7, 8, 9, 10]);
       console.log(orders);
     }

    useEffect(() => {
      
       
        clickme();
    
  }, []);

  return (
    <>
      {/* <button onClick={addOrders}>Add Orders</button>
      <div>
        {orders.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div> */}
          <button onClick={clickme}>CLick me</button>
    </>
  );
};

export default Orders;
