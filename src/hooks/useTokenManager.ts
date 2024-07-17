import { useNavigate } from 'react-router-dom';

const useTokenManager = () => {
    const navigate = useNavigate();

    const handleTokenError = (error: any) => {
        if (error.response) {
            const { status, data } = error.response;
            if (status === 401) {
                alert(data.message);
                localStorage.removeItem('accessToken');
                navigate('auth/login');
            } else if (status === 500) {
                alert('Server error');
            }
        }
    };

    const hasAccessToken = () => {
        return !!localStorage.getItem('accessToken');
    };

    return { handleTokenError, hasAccessToken };
};

export default useTokenManager;