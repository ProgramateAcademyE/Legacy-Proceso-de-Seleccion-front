import React from 'react'
import "./SelectButton.css"

const SelectButton = () => {
return (
<div>
<h4 className=''>Por favor seleccione fecha y hora</h4>
<select className='selectButton' >
<option value="">30/06/2022 AM</option>
<option value="">30/06/2022 PM</option>
<option value="">01/07/2022 AM</option>
<option value="">01/07/2022 PM</option>
</select>
</div>
)
}

export default SelectButton