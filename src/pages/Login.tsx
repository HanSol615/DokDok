// src/pages/Login.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import '../components/Auth/AuthForm.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = 'http://localhost:8888/auth/login';
    const data = {
      email,
      password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // 클라이언트 오류 처리
        if (response.status === 400 || response.status === 401) {
          alert(responseData.message);
        } else {
          // 기타 클라이언트 오류 처리
          alert('서버 응답 실패');
        }
        return;
      }

      console.log('로그인 성공:', responseData);
      alert(`환영합니다, ${responseData.nickname}님!`);

      // 로그인 성공 후 토큰 저장
      localStorage.setItem('accessToken', responseData.accessToken);
      // refreshToken을 cookie에 저장
      document.cookie = `refreshToken=${responseData.refreshToken}; Secure; HttpOnly`;

      // 로그인 성공 후 홈페이지로 이동
      navigate('/mybooks');

    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <AuthForm title="로그인">
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
        {error && <div className="error-message">{error}</div>}
        <button type="submit">로그인</button>
      </form>
    </AuthForm>
  );
};

export default Login;