'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Surface,
  TextField,
  toast,
} from '@heroui/react';
import { File, FileArrowUp, ArrowLeft } from '@gravity-ui/icons';
import { createPicture } from '@/sanity/picture/create';

export default function AddPhotoPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFileName(file?.name ?? null);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const onReset = () => {
    setFileName(null);
    setPreviewUrl(null);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setIsSubmitting(true);

    const result = await createPicture(new FormData(form));

    setIsSubmitting(false);

    if (result.success) {
      form.reset();
      onReset();
      toast.success('Image was successfully uploaded!');
    } else {
      setError(result.error);
    }
  };

  return (
    <Surface
      variant='default'
      className='flex justify-center w-full rounded-sm p-4 lg:p-10'
    >
      <div className='flex flex-col w-full gap-2 lg:w-1/2'>
        <a
          href='/'
          className='flex flex-row gap-1 items-center hover:underline'
        >
          <ArrowLeft />
          Back
        </a>
        <Form
          className='flex w-full flex-col gap-4'
          onSubmit={onSubmit}
          onReset={onReset}
        >
          <Button
            variant='outline'
            className='rounded-lg w-full h-full p-6 flex-col flex items-center'
            onPress={() => fileInputRef.current?.click()}
          >
            {fileName ? (
              <>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt={fileName ?? 'Photo preview'}
                    className='w-full max-h-64 object-cover rounded-lg'
                  />
                )}
                <File className='size-8' />
                <span>{fileName}</span>
              </>
            ) : (
              <>
                <FileArrowUp className='size-8' />
                <span>Upload your photo</span>
              </>
            )}
            <input
              ref={fileInputRef}
              type='file'
              id='photo'
              name='photo'
              accept='image/png, image/jpeg'
              className='hidden'
              onChange={onFileChange}
            />
          </Button>
          <TextField
            isRequired
            name='name'
            type='name'
            validate={(value) => {
              if (!/^[a-zA-Z0-9 ]{2,}$/i.test(value)) {
                return 'Please enter a valid name';
              }
              return null;
            }}
          >
            <Label>Name of photo</Label>
            <Input placeholder='Ducks in park' />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name='name_tag'
            type='name'
            validate={(value) => {
              if (!/^[a-zA-Z0-9]{2,}$/.test(value)) {
                return 'Please enter a valid user tag';
              }
              return null;
            }}
          >
            <Label>Name tag</Label>
            <Input placeholder='Name tag for photo i.e., "bella"' />
            <FieldError />
          </TextField>
          <span className='opacity-50'>
            PS! Contact thea.jenny02@gmail.com to delete a photo.
          </span>
          {error && <p className='text-danger text-sm'>{error}</p>}
          <div className='flex gap-2 justify-end'>
            <Button type='submit' isDisabled={isSubmitting}>
              {isSubmitting ? 'Uploading...' : 'Submit'}
            </Button>
            <Button type='reset' variant='secondary' isDisabled={isSubmitting}>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </Surface>
  );
}
