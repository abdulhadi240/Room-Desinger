'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { supabase } from 'types/supabase';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

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
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Images/images/${image.name}`
    : null;

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
      
    </div>
  );
};

export default ImageUploader;
