import React from "react";
import "./ModeratorDashboard_ApplicantsCited.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import SelectButton from "../../../components/selectButton/SelectButton";
import axios from "axios";
import { useSelector } from "react-redux";

const ModeratorApplicantsCited = () => {
  const [users, setUsers] = useState([]);

  /*   const URL = "http://localhost:3002/entrevistados";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }; */

  const token = useSelector((state) => state.token);
  async function showData() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setUsers(data);
  }

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row.date,
    },
    {
      name: "JORNADA",
      selector: (row) => row.hour,
    },
    {
      name: "ASPIRANTE",
      selector: (row) => row.name,
    },
    {
      name: "UBICACION",
      selector: (row) => row.identification,
    },
    {
      name: "ID ADPIRANTE",
      selector: (row) => row.interviewername,
    },
  ];

  return (
    //1 - Configurar los hooks

    <div className="moderatorContainer43">
      <h2>Aspirantes </h2>
      <div>
        <h4 className="">Por favor seleccione fecha y hora</h4>
        <select className="selectButton">
          <option value="">30/06/2022 AM</option>
          <option value="">30/06/2022 PM</option>
          <option value="">01/07/2022 AM</option>
          <option value="">01/07/2022 PM</option>
        </select>
      </div>
      <div className="moderatorApplicantsCitedContainer">
        <div className="table">
          <DataTableExtensions columns={columns} data={users}>
            <DataTable
              title="Aspirantes Citados"
              columns={columns}
              data={users}
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
              highlightOnHover
              selectableRows
              selectableRowsHighlight
              fixedHeader
              fixedHeaderScrollHeight
            />
          </DataTableExtensions>
        </div>
      </div>
    </div>
  );
};

export default ModeratorApplicantsCited;
