import { useNavigate } from 'react-router-dom';
import Auth from '../api/Auth';

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
        if (confirmLogout) {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                alert('로그아웃할 수 없습니다. 사용자가 로그인하지 않았습니다.');
                window.location.reload();
                return;
            }
                await Auth.logout(accessToken);
                localStorage.clear();
                sessionStorage.clear();
                navigate('/auth/login');
        }
    };

    return handleLogout;
};

export default useLogout;
