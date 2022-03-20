import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AdministerTechnicalTestAdd = () => {
	const [convocatory, setConvocatory] = useState();
  let history = useHistory();

	useEffect(() => {
		axios.get(PETITIONS.getConvocatories).then((res) => {
			setConvocatory(res.data);
		});
	}, []);

	return (
		<div style={{ margin: "165px auto" }}>
			<Formik
				initialValues={{
					titleTest: "",
					linkTest: "",
					pdfTest: "",
					convocatoryTest: [],
				}}
				validate={(allValues) => {
					let errors = {};
					if (!allValues.titleTest) {
						errors.titleTest = "Ingrese un titulo";
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
          console.log(newTest)
          try{
            axios
              .post(PETITIONS.createTechTest, newTest)
              .then((res) => {
                const msg = res.data.msg;
                alert(msg);
                history.push("/prueba");
              });
          }catch(error){
            console.log(error)
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
							</div>
						</div>
						<input type='submit' value='Guardar' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AdministerTechnicalTestAdd;
