import axios from 'axios';

const baseUrl = 'https://port-0-docktori-server-ly5qmhc1cd365acd.sel5.cloudtype.app'; // 서버 포트 설정

// 회원가입 요청을 보내는 함수
export const signup = async (userData: UserData) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/join`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 로그인 요청을 보내는 함수
export const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 비밀번호 변경 요청을 보내는 함수
export const resetPwd = async (accessToken: string, newpassword1: string, newpassword2: string) => {
  const url = `${baseUrl}/auth/password`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${accessToken}`
  };

  const data = {
    newpassword1,
    newpassword2,
  };

  try {
    const response = await axios.patch(url, data, { headers });
    return response.data;
  } catch (error) {
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

export default {
  signup,
  login,
  resetPwd,
};