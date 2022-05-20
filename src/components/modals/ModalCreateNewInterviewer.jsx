import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Modal.css"


const useStyles=makeStyles((theme)=>({
modal:{
  position:'absolute',
  width:'500px',
  backgroundColor:'white',
  border: '1px solid #000',
  boxShadow:'1px 10px 25px',
  padding:'26px 32px 24px',
  top:'35%',
  left:'35%',
  borderRadius:'10px',
  transform:'tanslate(-50%, -50%)',
},
textfield:{
  width:'100%'
}
}))
function ModalCreateNewInterviewer() {
  const styles=useStyles();

  const [modal, setModal]=useState(false);

  const abrirCerrarModal =()=>{
    setModal(!modal);
  }


  const body=(
    <div className={styles.modal} >
      <div align="center">     
        <h2>Datos</h2>
      </div>
      <TextField label="Nombre Completo" className={styles.textfield}/>
      <br/>
      <TextField label="Correo Electrónico" className={styles.textfield}/>
<brf/>
<TextField label="Contraseña" className={styles.textfield}/>
<br/>
<div align="right">
<button className="btnadd_interviewer">Agregar</button>
<button className="btnadd_interviewer" onClick={()=>abrirCerrarModal()}>Cancelar</button>
</div>  
 </div>
  )

  return (
    <div>
      <button className="btncreate_interviewer" onClick={()=>abrirCerrarModal()} >Crear Entrevistador </button>
<Modal
open={modal}
onClose={abrirCerrarModal}>
  {body}
</Modal>
    </div>
   
  )
}

export default ModalCreateNewInterviewer
