import axios from 'axios';

const baseUrl = 'http://localhost:8888'; // 서버 포트 설정

// 회원가입 요청을 보내는 함수
export const signup = async (userData: UserData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

interface UserData {
  email: string;
  password: string;
  nickname: string;
}

export default signup;