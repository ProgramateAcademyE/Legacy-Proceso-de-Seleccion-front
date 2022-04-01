import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ConvocatoryAspirants = () => {
  const [convAsp, setConvAsp] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/admin/convocatories"
      );
      setConvAsp(data);
    }
    fetchData();
  }, []);

  const [apirantsConvocatory, setApirantsConvocatory] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/user/users_info",
        {
          headers: { Authorization: token },
        }
      );

      setApirantsConvocatory(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {convAsp?.map((item) => (
<<<<<<< HEAD
        <div className="section__convocatory">
          <h1 key={item._id}>{item.name}</h1>{" "}
          {item.usersRegistered.map((i) =>
            apirantsConvocatory?.map((aspirant) =>
              i === aspirant._id ? <p>{aspirant.names}</p> : ""
            )
          )}
=======
        <div className="Aspirants_in_convocatory">  
          <div >
          <h1 key={item._id}>{item.name}</h1>
            {" "}
            {item.usersRegistered.map((i) =>
              apirantsConvocatory?.map((aspirant) =>
                i === aspirant._id ? <p>{aspirant.names}</p> : ""
              )
            )}
>>>>>>> c153dd8a910329caeb19602b7a906263fe1eb82f
        </div>
      </div>
      ))}
      ;
    </>
  );
};
export default ConvocatoryAspirants;
