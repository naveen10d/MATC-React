import React from 'react'
import { useNavigate } from 'react-router-dom'
import { instructions } from '../../../assets/Instructions'

export default function JavaPage() {
  const navigate = useNavigate()
  const handleClick = () => {
   navigate(`/javaQuestion`)
  }
  return (
    <div className='container'>
      <div className='row header'>
        <div className='col-12 '>
          <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
            <div className='d-flex justify-content-center align-items-center fs-1 m-5 text-dark'> Instructions </div>
            <div className='d-flex justify-content-start align-items-start mb-4'>
              <ul>
                {instructions.map(instruction => <li>{instruction}</li>
                )}
              </ul>
            </div>
            <button className='px-3 m-3' onClick={handleClick}>Start</button>
          </div>
        </div>
      </div>
    </div >
  )
}

