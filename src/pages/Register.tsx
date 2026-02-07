import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Register</h1>
            <div className="card">
                <button onClick={() => navigate('/dashboard')}>Navigate to Dashboard</button>
            </div>
        </>
    );
}
