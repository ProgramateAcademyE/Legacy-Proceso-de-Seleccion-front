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

 import React from 'react';
 import {Formik} from 'formik'
 const ModeratorForm = () =>{
    
     

     
        return(
            <>
            <Formik
            initialValues={{
                nombre:'Carlos',
                correo:'correo@correo.com'
            }}
            
            onSubmit={()=>{
                console.log('Formulario Enviado');

            }}
            
            
            >
               
                {({values, handleSubmit, handleChange})=>(
                    <form className="formulario" onSubmit={handleSubmit}>
                        {/*{console.log(props)}*/}
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Doraly"
                                value={values.nombre}
                                onchange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="nombre">Correo</label>
                            <input 
                                type="email" 
                                id="correo" 
                                name="correo"
                                placeholder="@educamas.edu.co" 
                                value={values.correo}
                                onchange={handleChange}
                             />
                        </div>
                        <button type="submit">Enviar</button>
                 </form>

                )}
            

            </Formik>
            
                
            </>


        )



     }


 export default ModeratorForm