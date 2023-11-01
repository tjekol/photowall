import { IPicture } from './schemas';
import { groq } from 'next-sanity';

export async function getPicture(): Promise<IPicture[]> {
  try {
    const { client } = await import('@/sanity/client');
    
    return client.fetch(
      groq`*[_type == "picture"] | order(_createdAt desc){
        _id,
        name,
        description,
        "image": image.asset->url,
        createdAt
      }`
    );
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}
