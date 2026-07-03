import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = 'production';
const apiVersion = 'v2023-10-09';

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
