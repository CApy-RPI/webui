import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const { user, loading } = useAuth();
    if (loading) return null;

    if (!user) {
        return <Navigate to="/events" replace />;
    }

    return <>{children}</>;
}
