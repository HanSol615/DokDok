import { httpClient } from './http';

// 회원가입 요청
export const join = async (userData: UserData) => {
  try {
    const response = await httpClient.post('/auth/join', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 로그인 요청
export const login = async (loginData: LoginData) => {
  try {
    const response = await httpClient.post('/auth/login', loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 비밀번호 변경 요청
export const resetPwd = async (accessToken: string, resetPwdData: ResetPwdData) => {
  const url = '/auth/password';
  const headers = {
    'Authorization': `${accessToken}`
  };

  try {
    const response = await httpClient.patch(url, resetPwdData, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 로그아웃 요청
export const logout = async (accessToken: string) => {
  const url = '/auth/logout';
  const headers = {
    'Authorization': `${accessToken}`,
  };

  try {
    const response = await httpClient.post(url, {}, { headers });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

// 회원 탈퇴 요청
export const cancelAccount = async (accessToken: string) => {
  const url = '/auth/cancelAccount';
  const headers = {
    'Authorization': `${accessToken}`,
  };

  try {
    const response = await httpClient.delete(url, { headers });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

interface UserData {
  email: string;
  password1: string;
  password2: string;
  nickname: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ResetPwdData {
  newpassword1: string;
  newpassword2: string;
}

export default {
  join,
  login,
  logout,
  resetPwd,
  cancelAccount,
};