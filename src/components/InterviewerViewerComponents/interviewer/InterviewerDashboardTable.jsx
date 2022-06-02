import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import React from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const InterviewerDashboardTable = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const meId = auth.user._id;
  const token = useSelector((state) => state.token);
  const [userMeets, setUserMeets] = React.useState();

  async function fetchUserMeets(id) {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/userMeets/${id}`,
      {
        headers: { Authorization: token },
      }
    );
    setUserMeets(data.data);
  }
  console.log("Meets", userMeets);
  React.useEffect(() => {
    fetchUserMeets(meId);
  }, []);

  const handleCurrentMeet = (meetId) => {
    history.replace(`/calificar${meetId}`);
  };

  const processedMeets = userMeets?.map((m) => {
    let meetRole;
    if (
      m[0].roomsAssesments
        ?.map((i) => i.selectors?.findIndex((s) => s._id === meId) !== -1)
        .includes(true)
    ) {
      meetRole = "Observador";
    } else if (
      m[0].roomsInterviewers
        ?.map((i) => i.selectors?.findIndex((s) => s._id === meId) !== -1)
        .includes(true)
    ) {
      meetRole = "Entrevistador";
    }
    return {
      meetId: m[0]._id,
      fecha: m[0].date?.slice(0, 10),
      jornada: m[0]?.shift,
      horario: m[0]?.shift,
      convocatoria: m[0].titleConvocatory,
      rol_asignado: meetRole,
      aspirantes: m[0].usersNumber,
    };
  });

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row["fecha"],
    },
    {
      name: "JORNADA",
      selector: (row) => row["jornada"],
    },
    {
      name: "CONVOCATORIA",
      selector: (row) => row["convocatoria"],
      sortable: true,
    },
    {
      name: "ROL ASIGNADO",
      selector: (row) => row["rol_asignado"],
      sortable: true,
    },
    {
      name: "#ASPIRANTES",
      selector: (row) => row["aspirantes"],
      sortable: true,
    },
    {
      name: "VER MAS",
      selector: (row) => (
        <button onClick={() => handleCurrentMeet(row.meetId)}>
          Ver Detalles
        </button>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="interviewerDashboardTable">
      <div className="moderatorApplicantsCitedContainer">
        <div className="tablemoderatorApplicantsCited">
          <DataTableExtensions columns={columns} data={processedMeets}>
            <DataTable
              title="Aspirantes Citados"
              columns={columns}
              data={processedMeets}
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
              highlightOnHover
            />
          </DataTableExtensions>
        </div>
      </div>
    </div>
  );
};

export default InterviewerDashboardTable;
