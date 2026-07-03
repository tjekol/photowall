'use server';

import { writeClient } from '../writeClient';

export type CreatePictureResult =
  | { success: true }
  | { success: false; error: string };

export async function createPicture(
  formData: FormData
): Promise<CreatePictureResult> {
  const name = formData.get('name');
  const nameTag = formData.get('name_tag');
  const photo = formData.get('photo');

  if (!(photo instanceof File) || photo.size === 0) {
    return { success: false, error: 'Please select a photo to upload.' };
  }
  if (typeof nameTag !== 'string' || !nameTag) {
    return { success: false, error: 'Please enter a name tag.' };
  }

  try {
    const asset = await writeClient.assets.upload('image', photo, {
      filename: photo.name,
    });

    await writeClient.create({
      _type: 'picture',
      name: typeof name === 'string' ? name : '',
      name_tag: nameTag,
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Error creating picture in Sanity:', error);
    return {
      success: false,
      error: 'Something went wrong while uploading. Please try again.',
    };
  }
}
