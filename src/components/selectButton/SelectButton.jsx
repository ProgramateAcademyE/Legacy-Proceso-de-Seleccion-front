import React, { useState, useEffect } from "react";
import "./SelectButton.css";
import axios from "axios";

const SelectButton = () => {
  const [citations, setCitations] = useState([]);
  const [citationsSelected, setCitationsSelected] = useState([]);

  // const token = useSelector((state) => state.token);
  async function fetchCitations() {
    const { data } = await axios.get(
      "http://localhost:3005/citations-all"
      /* {
    headers: { Authorization: token },
    }*/
    );
    setCitations(data);
    setCitationsSelected(data?.data[0]);
  }

  useEffect(() => {
    fetchCitations();
  }, []);

  return (
    <div>
      <h4 className="">Por favor seleccione fecha y hora</h4>
      <div className="selectContainer">
        <select className="selectButton">
          <option value="">30/06/2022 AM</option>
          <option value="">30/06/2022 PM</option>
          <option value="">01/07/2022 AM</option>
          <option value="">01/07/2022 PM</option>
        </select>
      </div>
    </div>
  );
};

export default SelectButton;
