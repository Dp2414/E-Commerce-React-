import axios from "axios";
import React, { useEffect, useState } from "react";

const Apis = () => {

    const [dta, setDta] = useState(0);
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("Effect Called")
    }, []);

    return (
      <div>
            Dtat
            {num}
        <button onClick={() => setDta(dta + 1)}>{dta }click</button>
      </div>
    );
};

export default Apis;
