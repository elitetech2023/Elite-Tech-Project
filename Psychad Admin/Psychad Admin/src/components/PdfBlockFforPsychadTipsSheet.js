import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import pdfLogo from '../images/logo-pdf.png';

function PdfBlockFforPsychadTipsSheet({ logo, name, onDelete }) {

  const handleDelete = () => {
    onDelete();
  };

  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    // Retrieve the list of PDFs from Firebase Storage
    const pdfsListRef = ref(storage, "TIPSHEET/");

    listAll(pdfsListRef)
      .then((response) => {
        const urls = [];
        const promises = response.items.map((item) => {
          return getDownloadURL(item).then((url) => {
            const name = item.name.split('_')[1];
            urls.push({ url, name });
          });
        });
        Promise.all(promises).then(() => {
          setPdfUrls(urls); // Update the PDF URLs state
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePdf = (url, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmDelete) {
      const fileName = decodeURIComponent(url).split("?")[0].split("TIPSHEET/")[1];
      const pdfRef = ref(storage, `TIPSHEET/${fileName}`);
      deleteObject(pdfRef)
        .then(() => {
          setPdfUrls((prev) => prev.filter(pdf => pdf.url !== url)); // Update the PDF URLs state
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const openPdfInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ width: 1200, marginTop: 60 }}>
      {pdfUrls.map((pdf) => {
        return (
          <div className="pdf-block-container" key={pdf.url}>
            <div className="pdf-block">
              <img
                src={pdfLogo}
                alt="PDF Logo"
                className="pdf-logo"
                onClick={() => window.open(pdf.url, '_blank')}
              />
              <span className="pdf-name" onClick={() => openPdfInNewTab(pdf.url)}>{pdf.name}</span>
              <FontAwesomeIcon
                icon={faTrashAlt}
                size={24}
                className="delete-icon"
                onClick={() => deletePdf(pdf.url, pdf.name)}
              />
            </div>
          </div>
        );
      })}

      <Link to="/uploadFile">
        <div className="floating-button">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </div>
      </Link>
    </div>
  )
}

export default PdfBlockFforPsychadTipsSheet