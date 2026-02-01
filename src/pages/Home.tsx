import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>CAPY</h1>
            <div className="card">
                <button onClick={() => navigate('/dashboard')}>Navigate to Dashboard</button>
            </div>
        </>
    );
}

export default Home;
