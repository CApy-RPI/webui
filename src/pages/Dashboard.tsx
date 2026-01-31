import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/App.css'

function Dashboard() {
    const navigate = useNavigate();

    
  return (
    <>

      <h1> My Dashboard </h1>
      <div className="card">

        <button onClick={() => navigate('/')}>
          Navigate to Home
        </button>

      </div>

    </>
  )
}

export default Dashboard