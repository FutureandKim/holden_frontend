import React from "react";
import axios from "axios";

export const Quiz = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/record/quiz`, {
    headers: {
    Authorization: `${localStorage.getItem('accessToken')}`,
    },
    });
    console.log("Record get successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create record:", error);
    throw error;
  }
};
