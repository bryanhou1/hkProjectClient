
// export const API_URL = 'http://147.8.134.246:3000/'
// export const API_URL = 'https://smile.hku.hk/ARGs_OSP';
export const API_URL = process.env.NODE_ENV === 'production' ?
  'http://147.8.134.246:3000/' :
  'http://localhost:3000';
