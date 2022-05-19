 import React,{useState} from 'react';
 import { Formik, Field, Form, ErrorMessage } from "formik";

 const ModeratorForm = () =>{
  const[formularioEnviado, cambiarFormularioEnviado] = useState(false)
    
     

     
        return(
            <>
            <Formik
            initialValues={{
                nombre:'',
                correo:''
            }}
            validate={(valores) =>{
              let errores ={};
              //validacion nombre
              if(!valores.nombre){
                errores.nombre = 'Por favor ingresa un nombre'

              }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){/*si contiene letras espacios y guion bajo */
              errores.nombre = "El nombre solo puede contener letras y espacios "

              }
              //validacion Correo
              if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo electronico'

              }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){/*si contiene letras espacios y guion bajo */
              errores.correo = "El correo  solo puede contener letras, numeros, puntos guiones y guion bajo  "

              }

              return errores;

            } }
            
            onSubmit={(valores,{resetForm})=>{
              resetForm();
              console.log(valores);
                console.log('Formulario Enviado');
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000);

            }}
            
            
            >
               
                {({errors}) =>(
                    <Form className="formulario" >
                    <div>
                      <div>                        
                        {console.log(errors)}
                        <div>
                          <label htmlFor='startDate'>Fecha </label>
                            <Field type='date' name='startDate' id='startDate' />
                              <ErrorMessage
                                name='startDate'
                                component={() => (
                                  <span>
                                    {errors.startDate}
                                  </span>
                                )}
                              />
                        </div>
                       
                        <div>
                          <h4>Jornada</h4>
                            <Field
                              name='jornada'
                              as='select'
                              multiple
                              className='form-control select picker form-select'>
                              <option value='am'>am</option>
                              <option value='pm'>pm</option>
                            </Field> 
                            <ErrorMessage
                              name='jornada'
                              component={() => (
                                <span>
                                  {errors.jornada}
                                </span>
                              )}
									          />     
                      </div>
                        <div>
                          <label htmlFor='interviewRooms'>No salas Entrevistas</label>
                          <Field type='number' name='interviewRooms' />
                          <ErrorMessage
                            name='interviewRooms'
                            component={() => (
                              <span>
                                {errors.interviewRooms}
                              </span>
                            )}
                          />
									      </div>
                  </div>
                  <div>
                    <div>
                            <label htmlFor='assessmentRooms'>No salas Assessment</label>
                            <Field type='number' name='assessmentRooms' />
                            <ErrorMessage
                              name='assessmentRooms'
                              component={() => (
                                <span>
                                  {errors.assessmentRooms}
                                </span>
                              )}
                            />
                    </div>
                    <div>
                      <label htmlFor="link">Link Reunion</label>
                            <Field 
                              type="text" 
                              id="link" 
                              name="link" 
                              placeholder="https://us02web.zoom.us/j/82796969722?pwd=Y0VGSG5TaXlPeTRqZEFVc2dEZk1qUT10"
                             />
                            <ErrorMessage name="link" component={()=>(
                              <div className="error">{errors.link}</div>

                                )}
                            />
                      
                            
                    </div>
                    

                  </div>
                        <div>
                                <label htmlFor="nombre">Nombre</label>
                                <Field 
                                    type="text" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Doraly"
                                  
                                    
                                />
                                <ErrorMessage name="nombre" component={()=>(

                                  <div className="error">{errors.nombre}</div>

                                )}
                                />
                      
                            
                        </div>
                        <div>
                                <label htmlFor="nombre">Correo</label>
                                <Field 
                                    type="email" 
                                    id="correo" 
                                    name="correo"
                                    placeholder="@educamas.edu.co" 
                                  

                                />
                                <ErrorMessage name="correo" component={()=>(

                                  <div className="error">{errors.correo}</div>

                                )}
                                />
                      
                        </div>

                        <div>
                              <Field name="pais" as="select">
                                <option value="mexico">Mexico</option>
                                <option value="mexico">Colombia</option>
                                <option value="mexico">España</option>
                                <option value="mexico">Argentian</option>

                              </Field>
                        </div>
                        <div>
                                  <label>
                                      <Field type="radio" name="sexo" vale="hombre"/>Hombre
                                  </label>
                                  <label>
                                      <Field type="radio" name="sexo" vale="mujer"/>Mujer
                                  </label>
                        </div>

                        <div>
                              <Field name="mensaje" as="textarea" placeholder="Mensaje"/>
                        </div>
                            <button type="submit">Enviar</button>
                            {formularioEnviado && <p classNAme="exito">Formulario Enviado con exito!</p>}

                    </div>
                 </Form>

                )}
                {/* 
                
                {({values,errors,touched, handleSubmit, handleChange, handleBlur}) =>(
                    <form className="formulario" onSubmit={handleSubmit}>
                  
                      {console.log(errors)}
                        
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Doraly"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                      
                            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                        </div>
                        <div>
                            <label htmlFor="nombre">Correo</label>
                            <input 
                                type="email" 
                                id="correo" 
                                name="correo"
                                placeholder="@educamas.edu.co" 
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}

                             />
                            {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                        </div>
                        <button type="submit">Enviar</button>
                         {formularioEnviado && <p classNAme="exito">Formulario Enviado con exito!</p>}
                 </form>

                )}
            
                   
 */}
            </Formik>
            
                
            </>


        )



     }


 export default ModeratorForm