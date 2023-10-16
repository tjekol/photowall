import { PortableTextBlock } from 'sanity';

export type IPicture = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  image: string,
  createdAt: string;
}
