import axios from 'axios';

export const ShowRecord = async () => {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  try {
    const response = await axios.get(
      `/record?date=${date}`,
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log('Record get successfully:', response.data.result);
    return response.data.result;
  } catch (error) {
    console.error('Failed to create record:', error);
    throw error;
  }
};
