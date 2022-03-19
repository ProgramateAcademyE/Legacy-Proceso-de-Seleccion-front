/* import React, { useEffect, useState } from "react";

import RequestService from "../../config/index";

const AspirantsInfo= () => {
    const [Aspirants, setAspirants] = useState([]);
    const getInfo = async () => {
        const { data } = await RequestService.get("");
        if (data) {
            setAspirants(data.data);
        }
    };
    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
          {Aspirants.map((Aspirant) => (
            <Modal
              key={Aspirant.id}
              data ={Aspirant.data}

            />
          ))}
          ;
        </div>
      );
    };
   export default AspirantsInfo; */
