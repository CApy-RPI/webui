import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <>
            <h1> My Dashboard </h1>
            <div>
                <button onClick={() => navigate('/')}>Navigate to Home</button>
            </div>
        </>
    );
}

export default Dashboard;
