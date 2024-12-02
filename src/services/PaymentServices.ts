import axios from 'axios';
import {
  API_POST_PAYMENT
} from './endpoints/index'

export default async function postPayment(payload:any) {
  try {
    const response = await axios.post(API_POST_PAYMENT,payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
