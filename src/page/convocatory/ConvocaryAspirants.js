import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PETITIONS } from "../../../requestUrl";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

  console.log(apirantsConvocatory)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(PETITIONS.GetAnswersFromForm,
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
          <div className='table_user mt-5'>
            <h1 key={item._id} className="Aspirants_conv_title">{item.name}</h1>
            {" "} 
            <TableHead>
                          <TableCell align='center'>Nombre</TableCell>
                          <TableCell align='center'>Apellido</TableCell>
                          <TableCell align='center'>Edad</TableCell>
                          <TableCell align='center'>Sexo</TableCell>
                          <TableCell align='center'>Email</TableCell>
                          <TableCell align='center'>Numero de telefono</TableCell>
                          <TableCell align='center'>Nacionalidad</TableCell>
                          <TableCell align='center'>Estrato</TableCell>
                        </TableHead>
            {item.usersRegistered.map((i) =>
              apirantsConvocatory?.map((aspirant) =>
                i === aspirant.user_id ?
                  <div>
                    <TableContainer component={Paper}>
                      <Table aria-label='simple table'>
                       <TableBody>
                            <TableRow key={aspirant.user_id}>
                            <TableCell align='center'>{aspirant.firstName}</TableCell>
                            <TableCell align='center'>{aspirant.firstSurname}</TableCell>
                            <TableCell align='center'>{aspirant.age}</TableCell>
                            <TableCell align='center'>{aspirant.sex}</TableCell>
                            <TableCell align='center'>{aspirant.email}</TableCell>
                            <TableCell align='center'>{aspirant.phone1}</TableCell>
                            <TableCell align='center'>{aspirant.nacionality}</TableCell>
                            <TableCell align='center'>{aspirant.Stratum}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  : ""
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