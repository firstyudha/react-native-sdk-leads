import axios from 'axios';
import {
    API_LOGIN
} from './endpoints'

const fetchEvents = async (email, password) => {
  try {
    const response = await axios.post(API_LOGIN, {
      username: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  fetchEvents,
};
