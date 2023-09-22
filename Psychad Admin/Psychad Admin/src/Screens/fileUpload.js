import React from 'react';
import { useState, useRef } from 'react';
import '../Style/FileUpload.css';
import upload from '../images/upload-icon.png';
import remove from '../images/remove.png';
import { storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function FileUpload() {

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files)
  };

  //functions
  const [showProgress, setShowProgress] = useState(false);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [files, setFiles] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  const inputRef = useRef(null);

  const uploadFile = () => {
    if (files == null || files.length === 0) {
      alert('Please select a PDF file to upload.');
      return;
    }

    const file = files[0];
    const fileRef = ref(storage, `TIME_MATTERS/${uuidv4()}_${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    setShowProgress(true); // Show the progress

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        setUploadError(error.message);
        setShowProgress(false); // Hide the progress on error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPdfUrls((prev) => [...prev, { url, name: file.name }]);
          inputRef.current.value = ''; // Reset the file input value
          setShowProgress(false); // Hide the progress on completion
          alert('PDF has been uploaded successfully.');
        });
      }
    );
  };



  return (
    <>
      <div className="containerAB">

        <h1>File Upload</h1>
        <hr style={{ marginTop: "10px", marginBottom: "20px" }} />

        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img src={upload} alt='' />
          <h1 className='file-heading'>Drag&Drop files here</h1>
          <h1 className='file-heading'>or</h1>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFiles(e.target.files)}
            // accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()} className='button22' style={{ color: "blue", borderColor: "blue" }}>Browse Files</button>
        </div>
        {files && (
          <>
            <div className="uploads">
              <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>
                  <div className='list-item'>{file.name}</div>
                  <button onClick={() => setFiles(null)}
                    className='list-btn'><img src={remove} alt="" className='headerimg' /></button>
                </li>)}

              </ul>
            </div>
          </>
        )}
        <button
          className='upload-btn'
          onClick={uploadFile}
        >
          Upload
        </button>
        {showProgress && (
          <div className="upload-progress">
            <p>Upload Progress: {uploadProgress}%</p>
          </div>
        )}
        {uploadError && <p>Error: {uploadError}</p>}
      </div>
    </>
  )
}

export default FileUpload