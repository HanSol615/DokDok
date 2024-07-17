import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import logoImg from '../assets/logoImg/logo1.jpg'
import { login } from '../api/Auth';
import { styled } from 'styled-components';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    try {
      const responseData = await login(data);

      console.log('로그인 성공:', responseData);
      alert(`환영합니다, ${responseData.nickname}님!`);

      // 로그인 성공 후 토큰 저장
      localStorage.setItem('accessToken', responseData.accessToken);
      // refreshToken을 cookie에 저장
      // document.cookie = `refreshToken=${responseData.refreshToken}; Secure; HttpOnly`;

      // 로그인 성공 후 홈페이지로 이동
      navigate('/mybooks');

    } catch (error: any) {
      console.error('로그인 에러:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <AuthForm title="로그인">
      <LoginStyle>
      <div className="logo-container">
        <img src={logoImg} alt="Logo" className="auth-logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <AuthInput
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="link-container">
            <Link to="/auth/join">회원가입</Link>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button id="auth-btn" type="submit">로그인</button>
      </form>
      </LoginStyle>
    </AuthForm>
  );
};

export default Login;

const LoginStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
`;