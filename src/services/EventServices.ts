import axios from 'axios';
import {
    API_GET_CAMPAIGN
} from './endpoints/index'

const fetchEvents = async () => {
  try {
    const response = await axios.get(API_GET_CAMPAIGN);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchEvents
