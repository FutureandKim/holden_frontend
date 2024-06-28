import axios from 'axios';

export const ShowQuiz = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/record/quiz`,
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    if (response.data.is_success) {
      return response.data.result;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Failed to fetch quiz:', error);
    throw error;
  }
};
