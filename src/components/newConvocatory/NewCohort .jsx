import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios"
import { PETITIONS } from "../../../requestUrl";
import { getDepartments, dataTypePopulation } from "../../helpers/ConvocatoryHelper";


const NewCohort = () => {
  const [departments, setDepartments] = useState([])
  let stractus = []
  for(let i = 1; i <= 6; i++){
    stractus.push(i)
  }

  useEffect(() => {
    getDepartments().then(async (department) => setDepartments(department))
  }, [])
  

  return<>

    <div style={{width: '50%', margin:' 0 auto'}}>
      <h2>Nueva Convocatoria</h2>
      <Formik
        initialValues={{
          nameConvocatory: '',
          maxQuotas: 0,
          startDate: '',
          endDate: '',
          startDateBootcamp: '',
          endDateBootcamp: '',
          residenceCountry: ['Colombia'],
          residenceDepartment: [],
          letter: 50,
          sololearn: 25,
          personalProfile: 25,
          age: [],
          gender: [],
          typePopulation: [],
          stratus: [],
        }}

        validate={(allValues) => {
          let errors = {};

          if(!allValues.nameConvocatory){
            errors.nameConvocatory = 'Ingresa un nombre';
          }
          return errors;
        }}
        
        onSubmit={(allValues, { resetForm }) => {
          console.log(allValues)
          const newConvocatory = {
            name: allValues.nameConvocatory,
            maxQuotas: allValues.maxQuotas,
            initialDate: allValues.startDate,
            finalDate: allValues.endDate,
            initialBootcampDate: allValues.startDateBootcamp,
            finalBootcampDate: allValues.endDateBootcamp,
            parameterization: {
              personalProfile: allValues.personalProfile,
              sololearn: allValues.sololearn,
              motivationLetter: allValues.letter,
            },
            residenceCountry: allValues.residenceCountry,
            residencyDepartment: allValues.residenceDepartment,
            maxAge: allValues.age,
            maxSocioeconomicStratus: allValues.stratus,
            gender: allValues.gender,
            typePopulation: allValues.typePopulation
          };

          try {
            axios.post(PETITIONS.createConvocatory, newConvocatory)
            .then(res => {
              const msg = res.data.msg;
              alert(msg);
            });
          } catch (error) {
            console.log(`Algo fallo ${error}`);
          }
          resetForm();
        }}
        
      >
        {({ errors }) => (
          <Form>
            {/* Convocatory Creation */}
            <div>
              <div>
                <label htmlFor="nameConvocatory">Nombre Convocatoria</label>
                <Field type="text" name="nameConvocatory" id="nameConvocatory"/>
                <ErrorMessage name="nameConvocatory" component={() => (<span style={{color: 'red'}}>{errors.nameConvocatory}</span>)}/>
              </div>
              <div>
                <label htmlFor="maxQuotas">Cupos</label>
                <Field type="number" name="maxQuotas"/>
              </div>
              <div>
                <label htmlFor="startDate">Fecha inicio</label>
                <Field type="date" name="startDate" id="startDate"/>
              </div>
              <div>
                <label htmlFor="endDate">Fecha cierre</label>
                <Field type="date" name="endDate" id="endDate"/>
              </div>
              <div>
                <label htmlFor="startDateBootcamp">Inicio del Bootcamp</label>
                <Field type="date" name="startDateBootcamp" id="startDateBootcamp"/>
              </div>
              <div>
                <label htmlFor="endDateBootcamp">Cierre del Bootcamp</label>
                <Field type="date" name="endDateBootcamp" id="endDateBootcamp"/>
              </div>
            </div>

            {/* Category for parametrization */}
            <div>
              <h3>Estos valores son medidos en porcentajes</h3>
              <div>
                <label htmlFor="letter">Carta</label>
                <Field type="number" name="letter" id="letter"/>
              </div>
              <div>
                <label htmlFor="sololearn">SoloLearn</label>
                <Field type="number" name="sololearn" id="sololearn"/>
              </div>
              <div>
                <label htmlFor="personalProfile">Perfil personal</label>
                <Field type="number" name="personalProfile" id="personalProfile"/>
              </div>
            </div>

            {/* Parametrization of the evaluation profile */}
            <div>
              <h3>Parametrizacion de la evaluacion del perfil (Para seleccionar varios datos presione la telca Shift o Ctrl)</h3>
              <div>
                <h4>Pais de residencia</h4>
                <Field name="residenceCountry" as="select" multiple className="form-control select picker">
                  <option value="colombia">Colombia</option>
                  <option value="venezuela">Venezuela</option>
                  <option value="no-aplica">No aplica</option>
                </Field>
              </div>
              <div>
                <h4>Departamento de residencia</h4>
                <Field name="residenceDepartment" as="select" multiple className="form-control select picker" style={{height: '300px'}}>
                  {departments?.map((department, index) => (
                    <option value={department.departamento} key={index}>{department.departamento}</option>
                  ))}
                  <option value="caracas">Caracas</option>
                  <option value="otro">Otro</option>
                </Field>
              </div>
              <div>
                <h4>Edad</h4>
                <Field name="age" as="select" multiple className="form-control select picker">
                  <option value="18+">Mayores a 18</option>
                  <option value="18-">Menores a 18</option>
                </Field>
              </div>
              <div>
                <h4>Genero segun documento de identidad</h4>
                <Field name="gender" as="select" multiple className="form-control select picker">
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </Field>
              </div>
              <div>
                <h4>Tipo de población</h4>
                <Field name="typePopulation" as="select" multiple className="form-control select picker">
                  {dataTypePopulation?.map((data, index) => (
                    <option value={data} key={index}>{data}</option>
                  ))}
                </Field>
              </div>
              <div>
                <h4>Estrato</h4>
                <Field name="stratus" as="select" multiple className="form-control select picker">
                  {stractus?.map((strac, index) => (
                    <option value={strac} key={index}>{strac}</option>
                  ))}
                </Field>
              </div>
            </div>
            <input type="submit" value="Guardar" />
          </Form>
        )}
      </Formik>

    </div>
  </>
    
};

export default NewCohort;
