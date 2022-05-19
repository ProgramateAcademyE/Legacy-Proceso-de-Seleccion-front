import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Modal.css"


const useStyles=makeStyles((theme)=>({
modal:{
  position:'absolute',
  width:'400px',
  backgroundColor:'white',
  border: '2px solid #000',
  boxShadow:'theme.shadows[5]',
  padding:'26px 32px 24px',
  top:'50%',
  left:'50%',
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
        <h2>Creando Entrevistador</h2>
      </div>
      <TextField label="Nombre Completo" className={styles.textfield}/>
      <br/>
      <TextField label="Correo Electrónico" className={styles.textfield}/>
<brf/>
<TextField label="Contraseña" className={styles.textfield}/>
<br/>
<div align="right">
<Button>Agregar</Button>
<Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
</div>  
 </div>
  )

  return (
    <div>
      <Button className={styles.button} onClick={()=>abrirCerrarModal()} >Crear Entrevistador </Button>
<Modal
open={modal}
onClose={abrirCerrarModal}>
  {body}
</Modal>
    </div>
   
  )
}

export default ModalCreateNewInterviewer
