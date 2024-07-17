import { useNavigate } from 'react-router-dom';
import Auth from '../api/auth.api';

const useAuth = () => {
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

    const handleCancelAccount = async () => {
        const confirmCancelAccount = window.confirm('회원을 탈퇴 하시겠습니까?');
        if (confirmCancelAccount) {
            const accessToken = localStorage.getItem('accessToken');
            if(!accessToken) {
                alert('먼저 로그인 해주십시오.');
                window.location.reload();
                return;
            }
                await Auth.cancelAccount(accessToken);
                alert('그동안 이용해 주셔서 감사합니다.');
                localStorage.clear();
                sessionStorage.clear();
                navigate('/auth/join');
        }
    };

    return {
        handleLogout,
        handleCancelAccount,
    };
};

export default useAuth;
