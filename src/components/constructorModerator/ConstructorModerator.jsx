import React from 'react'
import './constructormoderator.css'

const ConstructorModerator = (props) => {
return (
    <div className='containerconstructormoderator1'>
        <div className='containerconstructormoderator2'>
            <div className='containerconstructormoderator3'>Sala</div>
            <div>{props.sala}</div>
        </div>
        <div className='containerconstructormoderator2  hei2'>
            <div className='containerconstructormoderator3'>Selectores</div>
            <div className='containerconstructormoderator4 hei3' >{props.selectores}</div>
        </div>
        <div className='containerconstructormoderator2 hei2'>
            <div className='containerconstructormoderator3'>Candidatos</div>
            <div className='containerconstructormoderator4'>{props.candidatos}</div>
        </div>
    </div>
)
}

export default ConstructorModerator


