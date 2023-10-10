import { getPicture } from '@/lib/picture';
import { Picture } from '@/lib/picture/schemas';
import { urlFor } from '@/utils/image-builder';
import Image from 'next/image';

export default async function Home() {
  const data = await getPicture() as Picture[];

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div className='max-w-2xl w-full justify-between font-mono text-sm m-6'>
        <h1 className='text-lg'>
          This is my photography gallery.
        </h1>
      </div>

      <div className='columns-xs w-5/6 gap-4'>
        <ul>
          {data.map((picture) => (
            <li key={picture._id} className='mb-4'>
              <Image className='w-full aspect-picture' alt={picture.name} src={urlFor(picture.image).width(1000).url()} width={200} height={200} />
            </li>
          ))}
        </ul>
      </div>
      <a href='https://github.com/tjekol/memories' target='_' className='absolute bottom-6 hover:underline decoration-solid text-gray-500'>Made by Thea Jenny Kolnes</a>
    </main>
  );
}
