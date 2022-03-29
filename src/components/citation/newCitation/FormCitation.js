import React from 'react';
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
	KeyboardTimePicker
} from '@material-ui/pickers'
import { Grid, TextField } from '@material-ui/core';
/* import { MenuItem } from '@mui/material/MenuItem'; */
import { Container } from '@material-ui/core';
/* import { createTheme } from "@mater";
import { ThemeProvider } from "@material-ui/styles"; */

const FormCitation = () => {

const [selectedDate1, setSelectedDate1] = React.useState(
	new Date( "2022-03-30T12:00:00" )
)

const handleDateChange1 = (date) => {
	setSelectedDate1(date)
}

const [selectedDate2, setSelectedDate2] = React.useState(
	new Date( "2022-03-30T12:00:00" )
)

const handleDateChange2 = (date) => {
	setSelectedDate2(date)
}

/* const [convocatory, setConvocatory] = React.useState('');

const titleConvocatory = [
	{
		value: 'GOYN',
		label: 'GOYN'
	},
	{
		value: 'Regional',
		label: 'Regional'
	},
]; */

/* const defaultMaterialTheme = createTheme({
	palette: {
	  primary: '#FFCC02',
	  secondary: '#000000'
	},
  }); */


  return (
	<>
		<div>Nueva citación</div>
<Container>

<Grid>
<div className="row mt-4">
    <div className="col-12 col-md-6">
		<label htmlFor='' className="form-label">Fecha de inicio de la citacion</label>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
{/* <ThemeProvider theme={defaultMaterialTheme}> */}
	<KeyboardDatePicker
	variant='dialog'
	format='MM/dd/yyyy'
	id= 'citationDateStart'
	label='Selecciona la fecha'
	value={selectedDate1}
	onChange={handleDateChange1}
	KeyboardButtonProps={{
		'aria-label': 'change date'
	}}
	className="form-control"
	/>
{/* 	</ThemeProvider> */}
	</MuiPickersUtilsProvider>
</div>
<div className="col-12 col-md-6">
	<label htmlFor='' className="form-label">Hora de inicio de la citacion</label>
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardTimePicker
		id='citationStartTime'
		label='Selecciona la hora de inicio'
		value={selectedDate1}
		onChange={handleDateChange1}
		KeyboardButtonProps={{
			'aria-label': 'change date'
		}}
		className="form-control"
		/>
</MuiPickersUtilsProvider>
</div>
</div>
<div className="row mt-4">
    <div className="col-12 col-md-6">
		<label htmlFor='' className="form-label">Fecha de finalización de la citacion</label>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardDatePicker
	variant='dialog'
	format='MM/dd/yyyy'
	id= 'citationDateEnd'
	label='Selecciona la fecha'
	value={selectedDate2}
	onChange={handleDateChange2}
	KeyboardButtonProps={{
		'aria-label': 'change date'
	}}
	className="form-control"
	/>
	</MuiPickersUtilsProvider>
</div>
<div className="col-12 col-md-6">
	<label htmlFor='' className="form-label">Hora de finalización de la citacion</label>
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardTimePicker
		id='citationEndTime'
		label='Selecciona la hora de inicio'
		value={selectedDate2}
		onChange={handleDateChange2}
		KeyboardButtonProps={{
			'aria-label': 'change date'
		}}
		className="form-control"
		/>
</MuiPickersUtilsProvider>
</div>
</div>
<div className="row mt-4">
    <div className="col-12 col-md-6">
{/* <TextField
          id="titleConvocatory"
          select
          label="Select"
          value={convocatory}
          onChange={handleChange}
          helperText="Please select your currency"
        >
	{titleConvocatory.map((option) => (
    <MenuItem key={option.value} value={option.value}>
        {option.label}
    </MenuItem>
    ))}
</TextField> */}
</div>
<div className="col-12 col-md-6">
<label htmlFor='' className="form-label">Número máximo de cupos</label>
<TextField
          id="outlined-multiline-flexible"
          label="Indica # de cupos"
          maxRows={4}
		  className="form-control"
/*           value={value}
          onChange={handleChange} */
        />
</div>
</div>
<div className="row mt-6">
    <div className="col-12 col-md-12">
<label htmlFor='' className="form-label">Notas</label>
<TextField
          id="notes"
          label="Notas aclaratorias"
          multiline
          rows={6}
		  className="form-control"
        />
</div>
</div>
</Grid>
	</Container>
	</>
  )
}

export default FormCitation