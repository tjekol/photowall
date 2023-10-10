import { PortableTextBlock } from 'sanity';

export type Picture = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  image: string,
  createdAt: string;
}
