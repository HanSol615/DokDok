// src/pages/Join.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import '../components/Auth/AuthForm.css';


const Join: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate(); // handleSubmit보다 이전에 위치해야함

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    // 비밀번호 일치 여부 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 회원가입 요청
    const url = 'http://localhost:8888/auth/join';
    const data = {
      email,
      password,
      nickname
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
        if (response.status === 400) {
          alert(responseData.message);
        } else {
          alert('서버 응답 실패');
        }
        return;
      }

      console.log('회원가입 성공:', responseData);
      alert('회원가입 성공!');
      navigate('/auth/login');

    } catch (error) {
      console.error('회원가입 에러:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <AuthForm title="회원가입">
      <form className="join-form" onSubmit={handleSubmit}>
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
        <AuthInput
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <AuthInput
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <button type="submit">회원가입</button>
      </form>
    </AuthForm>
  );
};

export default Join;