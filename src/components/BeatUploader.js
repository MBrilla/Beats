import React from 'react';
import { useDropzone } from 'react-dropzone';

function BeatUploader() {
  const onDrop = (acceptedFiles) => {
    // Handle file upload
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px' }}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop your beats here, or click to select files</p>
    </div>
  );
}

export default BeatUploader;