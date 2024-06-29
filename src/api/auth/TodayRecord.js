import axios from 'axios';

export const TodayRecord = async (data) => {
  try {
    const response = await axios.post(
      `/record`,
      data,
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log('Record created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to create record:', error);
    throw error;
  }
};
