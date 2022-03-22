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

// import RequestService from "../../config/index";
import { CSVLink } from "react-csv";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ rows, actions = false, convocatoryData }) {
    const classes = useStyles();

    const header = [];

    for (const key in rows[0]) {
        header.push(key);
    }

    // const getUser = async () => {
    //     const { data } = await RequestService.get("/candidate/candidate");
    //     const { users } = data;
    // };
    // getUser();

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
                            {actions && (
                                <TableCell align="center">Acciones</TableCell>
                            )}
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
                                    {actions &&
                                        actions.map((action, index) =>
                                            action.status ? (
                                                <span key={index}>
                                                    <Link to={`/editarcohorte?idConvocatory=${prop._id}`}>
                                                    {action.icon}
                                                    </Link>
                                                </span>
                                            ) : null
                                        )}
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
