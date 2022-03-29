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
  console.log(convAsp);

  const [apirantsConvocatory, setApirantsConvocatory] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/user/all_info/:page",
        {
          headers: { Authorization: token },
        }
      );

      setApirantsConvocatory(data.profiles);
    }
    fetchData();
  }, []);
  console.log(apirantsConvocatory);

  return (
    <>
      {convAsp?.map((item) => (
        <div className="section__convocatory">
          <h1 key={item._id}>{item.name}</h1>
            {" "}
            {item.usersRegistered.map((i) =>
              apirantsConvocatory?.map((aspirant) =>
                i === aspirant._id ? <p>{aspirant.names}</p> : ""
              )
            )}
        </div>
      ))}
      ;
    </>
  );
};
export default ConvocatoryAspirants;
