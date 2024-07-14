import React, { useState } from 'react';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import '../components/Auth/AuthForm.css';
import { resetPwd } from '../api/Auth';

const ResetPwd: React.FC = () => {
  const [newpassword1, setNewpassword1] = useState('');
  const [newpassword2, setNewpassword2] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      newpassword1,
      newpassword2
    };

    // 비밀번호 유효성 검사
    if (newpassword1.trim() === '' || newpassword2.trim() === '') {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    if (newpassword1 !== newpassword2) {
      setError('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    if (!accessToken) {
      setError('로그인 후 이용해주세요.');
      return;
    }

    try {
      const responseData = await resetPwd(accessToken, data);

      console.log('비밀번호 변경 성공:', responseData);
      alert('비밀번호가 성공적으로 변경되었습니다.');

      // 폼 초기화
      setNewpassword1('');
      setNewpassword2('');
      setError(null);

    } catch (error: any) {
      console.error('비밀번호 변경 실패:', error);

      if (error.response) {
        const errorMessage = error.response.data.message || '비밀번호 변경에 실패했습니다.';
        setError(errorMessage);
      } else {
        setError('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <AuthForm title="비밀번호 변경">
      <form className="reset-pwd-form" onSubmit={handleSubmit}>
        <AuthInput
          type="password"
          placeholder="새 비밀번호"
          value={newpassword1}
          onChange={(e) => setNewpassword1(e.target.value)}
          required
        />
        <AuthInput
          type="password"
          placeholder="새 비밀번호 확인"
          value={newpassword2}
          onChange={(e) => setNewpassword2(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button id="auth-btn" type="submit">변경하기</button>
      </form>
    </AuthForm>
  );
};

export default ResetPwd;