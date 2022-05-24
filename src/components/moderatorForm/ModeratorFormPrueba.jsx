import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ModeratorFormPrueba = () => {
  const [citations, setCitations] = useState([]);
  const [available, setAvailable] = useState(undefined);
  const [citationSelected, setCitacionSelected] = useState(undefined);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const token = useSelector((state) => state.token);

  async function fetchCitations() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitations(data);
  }

  useEffect(() => {
    fetchCitations();
  }, []);

  async function fetchAvailibility(citationID) {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/available-id/${citationID}`,
      {
        headers: { Authorization: token },
      }
    );
    setAvailable(data.data[0]);
  }

  const formik = useFormik({
    //validate: formValidate,
    onSubmit: (values, { resetForm }) => {
      //resetForm();
      console.log("On submit", values);
      const toSubmit = {
        ...values,
        date: citationSelected?.appointmentDate,
        titleConvocatory: citationSelected?.titleConvocatory,
        shift: citationSelected?.shift[0],
        users: citationSelected?.users?.map((u) => ({ ...u, _id: u.userID })),
        interviewers: available.selectors.filter((s) => s.meetRole === 3),
        observers: available.selectors.filter((s) => s.meetRole === 4),
      };
      console.log("To submit", toSubmit);

      axios.post("http://localhost:3001/api/admin/meet", { ...toSubmit });

      //resetForm();
      //conle.log("Formulario Enviado");
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 5000);
    },
  });

  useEffect(() => {
    setCitacionSelected(
      citations?.data?.filter(
        (citation) => formik.values.citationID === citation._id
      )[0]
    );
    fetchAvailibility(formik.values.citationID);
  }, [formik.values.citationID]);

  return (
    <>
      <form action="" className="">
          <select name="Fecha" id="">
              <option value="">
              {citations?.data?.map((c) => (
                      <option value={c._id}>{`${c.appointmentDate
                        .toString()
                        .slice(0, -14)} ${c.shift[0]}`}</option>
                    ))}
              </option>
          </select>
          <div className="">
          <label htmlFor="interviewRooms">No salas Entrevistas</label>
          <input type="number" className="" />
          </div>

          <div className="">
          <label htmlFor="assesmentsRooms">No salas Assessment</label>
          <input type="number" className="" />
          </div>

          <div className="">
          <label htmlFor="link">Link Reunion</label>
          <input type="number" className="" />
          </div>  

        <div className="ModeratorFormTitle">
         <h5 className="ModeratorFormApplicants">Aspirantes</h5>
         <select name="" id=""></select>
         </div>  

         <div className="ModeratorFormTitle">
                <h5 className="">Entrevistadores</h5>
                <select name="" id=""></select>
              </div>

              <div className="ModeratorFormTitle">
                <h5 className="">observadores</h5>
                <select name="" id=""></select>
              </div>
          
      </form>
    </>
  );
};

export default ModeratorFormPrueba;
