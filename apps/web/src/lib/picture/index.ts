import { sanityClient } from '../sanity';

export async function getPicture() {
  const query = '*[_type == "picture"] | order(_createdAt desc)';
  const data = await sanityClient.fetch(query, {
    next: { revalidate: 10 },
  });

  return data;
}
