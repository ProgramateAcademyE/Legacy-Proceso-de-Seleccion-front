import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ViewerCalification.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewerTable = () => {
  const [citation, setCitation] = useState([]);
  const [processedCitation, setProcessedCitation] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const token = useSelector((state) => state.token);
  async function fetchCitation() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );

    setCitation(data.data);
    setProcessedCitation(
      data.data.map((item) => {
        return item.users.map((subitem) => {
          return {
            fecha: item.appointmentDate.slice(0, 10),
            jornada: item.shift,
            convocatoria: item.titleConvocatory,
            role_asignado: item.rol,
            sala: item.room,
            aspirantes: item.users,
            aspirante: subitem.names + " " + subitem.surname,
            id_aspirante: subitem.documentNumber,
          };
        });
      })
    );
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row["fecha"],
      sortable: true,
    },
    {
      name: "JORNADA",
      selector: (row) => row["jornada"],
      sortable: true,
    },
    {
      name: "CONVOCATORIA",
      selector: (row) => row["convocatoria"],
      sortable: true,
    },
    {
      name: "ROL ASIGNADO",
      selector: (row) => row["role_asignado"],
      sortable: true,
    },
    {
      name: "SALA",
      selector: (row) => row["sala"],
      sortable: true,
    },
    {
      name: "ASPIRANTES",
      selector: (row) => row["aspirantes"],
      sortable: true,
    },
    {
      name: "VER DETALLE",
      selector: (row) => <a href="./observadorassesment">Ver Detalle</a>,
    },
  ];

  return (
    <div className="interviewerApplicantTable">
      <DataTableExtensions columns={columns} data={processedCitation}>
        <DataTable
          columns={columns}
          data={processedCitation}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight
        />
      </DataTableExtensions>
    </div>
  );
};

export default ViewerTable;
