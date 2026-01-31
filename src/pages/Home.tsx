import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/App.css'

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CAPY</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => navigate('/dashboard')}>
          Navigate to Dashboard
        </button>

      </div>

    </>
  )
}

export default Home