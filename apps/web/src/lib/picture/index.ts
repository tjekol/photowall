import { sanityClient } from '../sanity';

export async function getPicture() {
  const query = '*[_type == "picture"]';
  const data = await sanityClient.fetch(query);

  return data;
}
