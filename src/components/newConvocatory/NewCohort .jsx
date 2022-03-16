import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios"
import { PETITIONS } from "../../../requestUrl";


const NewCohort = () => {
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
          residenceCountry: [],
          residenceDepartment: [],
          letter: 50,
          sololearn: 25,
          personalProfile: 25,
          age: [],
          stratus: []
        }}

        validate={(allValues) => {
          let errors = {};

          if(!allValues.nameConvocatory){
            errors.nameConvocatory = 'Ingresa un nombre';
          }
          return errors;
        }}

        onSubmit={(allValues, { resetForm }) => {
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
            maxSocioeconomicStratus: allValues.stratus
          };

          try {
            axios.post(PETITIONS.convocatory, newConvocatory)
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
              <h3>Parametrizacion de la evaluacion del perfil</h3>
              <div>
                <label htmlFor="residenceCountry">Pais de residencia</label><br/>
                <label>
                  <Field type="checkbox" name="residenceCountry" value="Colombia" />
                  Colombia
                </label>
                <label>
                  <Field type="checkbox" name="residenceCountry" value="Venezuela" />
                  Venezuela
                </label>
              </div>
              <div>
                <label htmlFor="residenceDepartment">Departamento de residencia</label><br/>
                <label>
                  <Field type="checkbox" name="residenceDepartment" value="Choco" />
                  Choco
                </label>
                <label>
                  <Field type="checkbox" name="residenceDepartment" value="Medellín" />
                  Medellín
                </label>
              </div>
              <div>
                <label htmlFor="age">Edad</label><br/>
                <label>
                  <Field type="checkbox" name="age" value="< 18" />
                  Menores de 18
                </label>
                <label>
                  <Field type="checkbox" name="age" value="> 18" />
                  Mayores de 18
                </label>
              </div>
              <div>
                <label htmlFor="stratus">Estrato</label><br/>
                <label>
                  <Field type="checkbox" name="stratus" value="1" />
                  Estrato 1
                </label>
                <label>
                  <Field type="checkbox" name="stratus" value="2" />
                  Estrato 2
                </label>
                <label>
                  <Field type="checkbox" name="stratus" value="3" />
                  Estrato 3
                </label>
                <label>
                  <Field type="checkbox" name="stratus" value="4" />
                  Estrato 4
                </label>
                <label>
                  <Field type="checkbox" name="stratus" value="5" />
                  Estrato 5
                </label>
                <label>
                  <Field type="checkbox" name="stratus" value="6" />
                  Estrato 6
                </label>
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
