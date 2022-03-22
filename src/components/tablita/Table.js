import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Search from "../search/Search";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PETITIONS } from "../../../requestUrl";

import { CSVLink } from "react-csv";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ rows, convocatoryData }) {
    const classes = useStyles();

    const header = [];
    for (const key in rows[0]) {
        header.push(key);
    }
    // redirect user
    let history = useHistory()

    // const getUser = async () => {
    //     const { data } = await RequestService.get("/candidate/candidate");
    //     const { users } = data;
    // };
    // getUser();

    const handleDelete = (id) => {
        try {
            axios.delete(`${PETITIONS.deleteConvocatory}${id}`)
            history.push("/convocatoria")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Search />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {header.map((row, index) => (
                                <TableCell key={index} align="center">
                                    {row}
                                </TableCell>
                            ))}
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {convocatoryData.map((prop, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    {prop.name}
                                </TableCell>
                                <TableCell align="center">
                                    {prop.maxQuotas}
                                </TableCell>
                                <TableCell align="center">
                                    {prop.initialDate}
                                </TableCell>
                                <TableCell align="center">
                                    {prop.finalDate}
                                </TableCell>
                                <TableCell align="center">
                                    {prop.initialBootcampDate}
                                </TableCell>
                                <TableCell align="center">
                                    {prop.finalBootcampDate}
                                </TableCell>
                                <TableCell align="center">
                                        <Link to={`/editarcohorte?idConvocatory=${prop._id}`}>
                                            <div><i className="far fa-edit" style={{color: 'blue'}}></i></div>
                                        </Link>
                                        <Link to={`/detail?idConvocatory=${prop._id}`}>
                                            <div><i className="far fa-eye" style={{color: 'green'}}></i></div>
                                        </Link>
                                        <Link to={`/editarcohorte?idConvocatory=${prop._id}`}>
                                            <div><i className="fas fa-power-off"></i></div>
                                        </Link>
                                        {/* <Link to={`/delete?idConvocatory=${prop._id}?delete=true`}> */}
                                        <button onClick={() => handleDelete(prop._id)}>
                                            <div><i className="far fa-trash-alt" style={{color: 'red'}}></i></div>
                                        </button>
                                        {/* </Link> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="containerButton">
                <div>
                    <CSVLink data={rows} filename="prueba CSV">
                        <button className="btn btn-success">Exportar</button>
                    </CSVLink>
                </div>
            </div>
        </>
    );
}
