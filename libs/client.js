import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'katsat-blog',
  apiKey: process.env.API_KEY,
});