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
        <div className="Aspirants_in_convocatory">  
          <div >
          <h1 key={item._id} className="Aspirants_conv_title">{item.name}</h1>
            {" "}
            {item.usersRegistered.map((i) =>
              apirantsConvocatory?.map((aspirant) =>
                i === aspirant._id ? <p className="Aspirant_inconv_name">{aspirant.names}</p> : ""
              )
            )}
        </div>
      </div>
      ))}
      ;
    </>
  );
};
export default ConvocatoryAspirants;
