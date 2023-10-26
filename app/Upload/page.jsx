'use client'
import useNameStore from '@/utils/State';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from 'types/supabase';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const { name1,name2,name3 } = useNameStore();
  const [loading, setLoading] = useState(false)
  const [predictedImageUrl, setPredictedImageUrl] = useState('')
  const [predictedImageLoaded, setPredictedImageLoaded] = useState(false)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    setUploadError(null);
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (image) {
        setUploading(true);

        const { data, error } = await supabase.storage.from('Images').upload(`images/${image.name}`, image);

        if (error) {
          console.error('Image upload error:', error);
          setUploadError('Image upload failed.');
        } else {
          setUploading(false);
        }
      }
    };

    uploadImage();
  }, [image]);

  const imageUrl = image
    ? `https://ekndpczqlutxzbglyjxd.supabase.co/storage/v1/object/public/Images/images/${image.name}`
    : null;

    console.log(imageUrl);


    const predictImage = useCallback(
      async (imageUrl) => {
        try {
          setLoading(true)
          const response = await fetch('/predict', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              imageUrl,
              name2,
              name3,
            }),
          })
          const data = await response.json()
          if (data.status === 429) {
            throw new Error(
              'Too many uploads recently. Try again in a few minutes.',
            )
          } else if (!data.predictedImageUrl) {
            throw new Error('No predicted image found. Try Again!')
          }
          setPredictedImageUrl(data.predictedImageUrl)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.error(error)
        }
      },
      [name2,name3],
    )



  return (
    <div className="mt-80">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e)}
        className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      {uploading && <div className="loader">Uploading...</div>}
      {uploadError && <div className="text-red-600">{uploadError}</div>}
      {imageUrl && <Image src={imageUrl} alt="Uploaded" width={500} height={500} />}
      <div>{imageUrl}</div>
      <p className="mb-3">
				<button
					// disabled={!imageUrl || loading}
					onClick={() => predictImage(imageUrl)}
				>
					{loading ? 'Redesigning' : 'Redesign'} to: {name2} {name3}
					
				</button>
			</p>
      <div>
        <Image src={predictedImageUrl} alt='image' width={500} height={500}/>
      </div>
      
    </div>
  );
};

export default ImageUploader;
