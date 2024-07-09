// src/components/Auth/AuthForm.tsx

import React from 'react';
import './AuthForm.css'; // 스타일 파일 임포트

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, children }) => {
  return (
    <div className="auth-form">
      <div className="auth-form-card">
        <h2>{title}</h2>
        <div className="form-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
