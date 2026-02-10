import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row gap-8 items-center w-full p-4">
            <h1 className="m-0 flex-grow">CAPY Web UI</h1>
            <a className="cursor-pointer" onClick={() => navigate('/profile')}>
                Profile
            </a>
            <a className="cursor-pointer" onClick={() => navigate('/register')}>
                Register
            </a>
        </div>
    );
}
