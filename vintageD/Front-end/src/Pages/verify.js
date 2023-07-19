import axios from 'axios';

const API_KEY = "930778d96bd54450b13ee22b4d583b14";

export const verifyEmail = async (email) => {
  try {
    const response = await axios.get(`https://api.zerobounce.net/v2/validate?api_key=${API_KEY}&email=${email}`);
    return response.data;
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};