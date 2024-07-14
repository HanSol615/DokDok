import axiosInstance from './Axios';

export const dokdokCalendar = async (accessToken: string | null, year: number, month: number) => {
  const url = `/home/calender?year=${year}&month=${month}`;
  const headers = {
      'Authorization': `${accessToken}`
  };

  try {
      const response = await axiosInstance.get(url, { headers });
      console.log(response.data);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export default {
  dokdokCalendar,
};