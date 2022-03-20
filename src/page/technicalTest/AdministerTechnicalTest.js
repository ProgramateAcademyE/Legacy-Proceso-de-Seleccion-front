import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import './TechTest.css'

const AdministerTechnicalTest = () => {
	const [test, setTest] = useState();
	const [conv, setConv] = useState();

	useEffect(() => {
		axios.get(PETITIONS.getTechTest).then((res) => {
			setTest(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(PETITIONS.getConvocatories).then((res) => {
			setConv(res.data);
		});
	}, []);

	return (
    <div className="table-container">
			<div className="title">
				<h3>Crear Prueba Tecnica</h3>
        <Link to='/agregar' className='btn btn-success mt-3 mb-3'>Crear Convocatoria</Link>
			</div>
			<TableContainer>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>NOMBRE</TableCell>
							<TableCell align='center'>PDF</TableCell>
							<TableCell align='center'>CONVOCATORIAS</TableCell>
							<TableCell align='center'>Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{test?.map((prop, index) => (
							<TableRow key={index}>
								<TableCell align='center'>
									<a href={prop.url} target='_blank' rel='noopener noreferrer'>
										{prop.title}
									</a>
								</TableCell>
								<TableCell align='center'>
									<a
										href={prop.pdf}
										target='_blank'
										download={prop.title}
										rel='noopener noreferrer'>
										Descargar prueba tecnica
									</a>
								</TableCell>
								<TableCell align='center'>
									{conv?.map(({ _id, name }) => (
										<div key={_id}>
											{prop.convocatories?.map((id) =>
												id === _id ? name : null
											)}
										</div>
									))}
								</TableCell>
								<TableCell align='center'>L, A, E</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AdministerTechnicalTest;
