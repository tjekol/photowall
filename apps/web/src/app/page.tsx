'use client';

import { useEffect, useState } from 'react';
import { getPicture } from '@/sanity/picture';
import { IPicture } from '@/sanity/picture/schemas';
import Image from 'next/image';
import { Button } from '@heroui/react';

export default function HomePage() {
  const [pictures, setPictures] = useState<IPicture[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPicture();
      setPictures(data);
    };
    fetchData();
  }, [pictures]);

  return (
    <>
      <Button className='mb-4'>
        <a href='add-photo'>Share a photo!</a>
      </Button>

      <div className='columns-xs w-full sm:w-4/5 gap-4 '>
        {pictures.map((picture) => (
          <div key={picture._id} className='mb-4 relative'>
            {picture.name && (
              <span className='absolute bottom-2 left-2 px-1 bg-white/60'>
                {picture.name}
              </span>
            )}
            {picture.name_tag && (
              <span className='absolute bottom-2 right-2 px-1 bg-white/60'>
                @{picture.name_tag}
              </span>
            )}
            <Image
              className='w-full aspect-image'
              src={picture.image}
              alt={picture.name}
              width={350}
              height={200}
            />
          </div>
        ))}
      </div>
      <a
        href='https://github.com/tjekol/memories'
        target='_'
        className='static bottom-6 mt-8 hover:underline text-gray-400'
      >
        Made by TJEKOL🦋
      </a>
    </>
  );
}
