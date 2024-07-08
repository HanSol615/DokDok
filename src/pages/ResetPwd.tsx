// src/pages/ResetPassword.tsx

import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import '../components/Auth/AuthForm.css';

const ResetPwd: React.FC = () => {
  return (
    <AuthForm title="비밀번호 변경">
      <div className="reset-pwd-form">
        <AuthInput type="password" placeholder="새 비밀번호" required />
        <AuthInput type="password" placeholder="새 비밀번호 확인" required />
        <button type="submit">변경하기</button>
      </div>
    </AuthForm>
  );
};

export default ResetPwd;