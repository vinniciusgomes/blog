import axios from 'axios';

import { env } from 'configs';

const api = axios.create({
  baseURL: env.apiUrl,
});

export default api;
