import axios from 'axios';
import {
  API_POST_LEAD
} from './endpoints/index'

export default async function postLead(payload:any) {
  try {
    const response = await axios.post(API_POST_LEAD,payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
