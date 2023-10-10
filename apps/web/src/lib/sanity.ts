import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2021-10-21';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
