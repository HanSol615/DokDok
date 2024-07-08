import React, { InputHTMLAttributes } from 'react';
import './AuthForm.css';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const AuthInput: React.FC<AuthInputProps> = ({ ...props }) => {
  return (
    <input className="auth-input" {...props} />
  );
};

export default AuthInput;
