import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormTechTest = (props) => {
	let history = useHistory();
	const { convocatory, query, data } = props;

	return (
		<div style={{ margin: "165px auto" }}>
			<h2>{query ? `Actualizar Prueba Tecnica` : "Nueva Prueba Tecnica"}</h2>
			<Formik
				initialValues={{
					titleTest: data?.title || "",
					linkTest: data?.url || "",
					pdfTest: "",
					convocatoryTest: data?.convocatories || [],
				}}
				validate={(allValues) => {
					let errors = {};
					if (!allValues.titleTest) {
						errors.titleTest = "Ingrese un titulo";
					}
					if (!allValues.linkTest) {
						errors.linkTest = "Introduzca un link valido";
					}
					if (!allValues.pdfTest) {
						errors.pdfTest = "Por favor agregue un archivo";
					}
					if (
						!allValues.convocatoryTest ||
						allValues.convocatoryTest.length <= 0
					) {
						errors.convocatoryTest =
							"Por favor seleccione al menos una convocatoria";
					}
					return errors;
				}}
				onSubmit={(allValues, { resetForm }) => {
					const newTest = {
						title: allValues.titleTest,
						url: allValues.linkTest,
						pdf: allValues.pdfTest,
						convocatories: allValues.convocatoryTest,
					};
					try {
						if (query) {
							axios
								.put(`${PETITIONS.updateTechTest}${data._id}`, newTest)
								.then(() => {
									history.push("/prueba");
								});
						} else {
							axios.post(PETITIONS.createTechTest, newTest).then((res) => {
								const msg = res.data.msg;
								alert(msg);
								history.push("/prueba");
							});
						}
					} catch (error) {
						return error;
					}
					resetForm();
				}}>
				{({ errors }) => (
					<Form>
						{/* Technical Test */}
						<div>
							<div>
								<label htmlFor='titleTest'>Titulo</label>
								<Field type='text' name='titleTest' id='titleTest' />
								<ErrorMessage
									name='titleTest'
									component={() => (
										<span style={{ color: "red" }}>{errors.titleTest}</span>
									)}
								/>
							</div>
							<div>
								<label htmlFor='linkTest'>Url</label>
								<Field type='url' name='linkTest' />
								<ErrorMessage
									name='linkTest'
									component={() => (
										<span style={{ color: "red" }}>{errors.linkTest}</span>
									)}
								/>
							</div>
							<div>
								<label htmlFor='pdfTest'>PDF</label>
								<Field type='file' name='pdfTest' id='pdfTest' />
								<ErrorMessage
									name='pdfTest'
									component={() => (
										<span style={{ color: "red" }}>{errors.pdfTest}</span>
									)}
								/>
							</div>
							<div>
								<label htmlFor='convocatoryTest'>Convocatoria</label>
								<Field name='convocatoryTest' as='select' multiple>
									{convocatory?.map((data) => (
										<option key={data._id} value={data._id}>
											{data.name}
										</option>
									))}
								</Field>
								<ErrorMessage
									name='convocatoryTest'
									component={() => (
										<span style={{ color: "red" }}>
											{errors.convocatoryTest}
										</span>
									)}
								/>
							</div>
						</div>
						<input type='submit' value={data ? "Actualizar" : "Guardar"} />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormTechTest;
