import { getPicture } from '@/sanity/picture';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getProps() {
  const pictures = await getPicture();

  if (!pictures) {
    return notFound();
  }

  return pictures;
}

export default async function HomePage() {
  const pictures = await getProps();

  return (
    <main className='flex flex-col min-h-screen items-center p-24'>
      <div className='max-w-2xl w-full justify-between font-mono text-sm m-6'>
        <h1 className='text-2xl'>
          This is my photography gallery.
        </h1>
        <p className='text-slate-400 mb-6'>
          This website is a place where I can store my photos taken with my camera. They are uploaded through <a href='https://www.sanity.io' target='_' className='font-semibold hover:underline'>Sanity</a>.
        </p>
      </div>

      <div className='columns-xs w-4/5 gap-4'>
        {pictures.map((picture) => (
          <div key={picture._id} className='mb-4'>
            <Image className='w-full aspect-image' src={picture.image} alt={picture.name} width={350} height={200}/>
          </div>
        ))}
      </div>
      <a href='https://github.com/tjekol/memories' target='_' className='static bottom-6 mt-8 hover:underline text-gray-400'>Made by Thea Jenny Kolnes🦋</a>
    </main>
    
  );
}
