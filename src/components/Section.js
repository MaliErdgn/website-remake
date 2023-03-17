import React from 'react'
import './Section.css'

function Section({title, description}) {
    const openSection = () => {
        console.log(title)
    }

  return (
    <>
        <div onClick={openSection} className='section'>
            <h3>{title}</h3>
            <div>{description}</div>
        </div>
    </>
  )
}

export default Section