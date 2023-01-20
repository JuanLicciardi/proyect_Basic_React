import React from 'react'
import './progressBar2.css'

function ProgressBar2({now,label}) {
  return (
    <div className='progressContainer' >
        <span className='bar' style={{width:`${now}%`}} ></span>
        <span className='number' >{label}</span>
        
    </div>
  )
}

export default ProgressBar2