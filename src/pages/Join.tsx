import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import '../components/Auth/AuthForm.css';
import { signup } from '../api/Auth'; // signup 함수 가져오기

const Join: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate(); // handleSubmit보다 이전에 위치해야함

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비밀번호 일치 여부 확인
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const data = {
      email,
      password1,
      password2,
      nickname,
    };

    try {
      const responseData = await signup(data);

      console.log('회원가입 성공:', responseData);
      alert('회원가입 성공!');
      navigate('/auth/login');

    } catch (error: any) {
      console.error('회원가입 에러:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
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
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />
        <AuthInput
          type="password"
          placeholder="비밀번호 확인"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
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