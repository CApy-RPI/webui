import { useNavigate } from 'react-router-dom';
import '../css/App.css';

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
