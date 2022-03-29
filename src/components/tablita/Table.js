import React, { useState } from "react";
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
import { PETITIONS } from "../../../requestUrl";
// import RequestService from "../../config/index";
import { CSVLink } from "react-csv";
import ModalConvocatory from "../modals/ModalConvocatory";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function BasicTable({ rows, convocatoryData }) {
	const classes = useStyles();
	const [convocatory, setConvocatory] = useState(convocatoryData);

	const header = [];
	for (const key in rows[0]) {
		header.push(key);
	}

	const handleDelete = (id) => {
		try {
			axios.delete(`${PETITIONS.deleteConvocatory}${id}`);
			setConvocatory(convocatory.filter((oneConvocatory) => oneConvocatory._id !== id));
		} catch (error) {
			return error;
		}
	};

	const [convocatoryId, setConvocatoryId] = useState(null);
	const convocatoryDetail = (id) => {
		setConvocatoryId(id);
	};

	return (
		<>
			{convocatoryData.length <= 0 || convocatory.length <= 0 ? (
				<div className='mainContainer'>
					<div className='containerFirstView'>
						<div className='containerP'>
							<p>
								No hay convocatorias<br></br>
								¿Deseas crear una nueva convocatoria?
							</p>
						</div>
						<Link
							to='/nuevacohorte'
							className='containerButton btn btn-success mt-3 mb-3'
						>
							Crear
						</Link>
					</div>
				</div>
			) : (
				<>
					<div className='section__contentC'>
						<span className='upperCase bold'>Convocatorias</span>
					</div>
					<Link to='/nuevacohorte' className='btn btn-success '>
						Crear Convocatoria
					</Link>
					<Search />
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									{header.map((row, index) => (
										<TableCell key={index} align='center'>
											{row}
										</TableCell>
									))}
									<TableCell align='center'>Acciones</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{convocatory?.map((prop, index) => (
									<TableRow key={index}>
										<TableCell align='center'>{prop.name}</TableCell>
										<TableCell align='center'>{prop.maxQuotas}</TableCell>
										<TableCell align='center'>{prop.initialDate}</TableCell>
										<TableCell align='center'>{prop.finalDate}</TableCell>
										<TableCell align='center'>
											{prop.initialBootcampDate}
										</TableCell>
										<TableCell align='center'>
											{prop.finalBootcampDate}
										</TableCell>
										<TableCell align='center'>
											<Link to={`/editarcohorte?idConvocatory=${prop._id}`}>
												<div>
													<i className='far fa-edit' style={{ color: "blue" }}></i>
												</div>
											</Link>
											<div className='btn'>
												<a href='#convocatoria'>
													<i className='far fa-eye' onClick={() => convocatoryDetail(prop._id)}></i>
												</a>
											</div>
											<ModalConvocatory idConvocatory={convocatoryId} />
											<button onClick={() => handleDelete(prop._id)}>
												<div>
													<i
														className='far fa-trash-alt'
														style={{ color: "red" }}
													></i>
												</div>
											</button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<div className='containerButton'>
						<div>
							<CSVLink data={rows} filename='prueba CSV'>
								<button className='btn btn-success'>Exportar</button>
							</CSVLink>
						</div>
					</div>
				</>
			)}
		</>
	);
}
