import axios from 'axios';
import { env } from 'config';

const api = axios.create({
  baseURL: env.apiUrl,
});

export default api;
