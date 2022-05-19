/*import React from 'react';
import { useFormik } from 'formik';

const ModeratorForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
 export default ModeratorForm*/

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
               {/* {{values,errors,touched, handleSubmit, handleChange, handleBlur}} */}
                {({errors}) =>(
                    <Form className="formulario" >
                     {/*  {console.log(touched)}elemento de input fue tocado */}
                      {console.log(errors)}
                        
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