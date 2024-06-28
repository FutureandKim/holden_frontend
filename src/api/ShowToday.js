import axios from 'axios';

export const ShowToday = async () => {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/record?date=${date}`,
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log('Record get successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to create record:', error);
    throw error;
  }
};
