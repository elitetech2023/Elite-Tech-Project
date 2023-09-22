import React, { useState } from 'react';
import PdfBlock from './PdfBlockForTimeMatters';

const PdfBlockList = () => {
  const [pdfBlocks, setPdfBlocks] = useState([
    { id: 1, logo: 'https://icones.pro/wp-content/uploads/2021/03/icone-pdf-symbole-png-rouge.png', name: 'Working on recess is beneficial on your well being.pdf' },
    { id: 2, logo: 'https://icones.pro/wp-content/uploads/2021/03/icone-pdf-symbole-png-rouge.png', name: 'Get multiple certificates as its beneficial for presentation.pdf' },
    { id: 3, logo: 'https://icones.pro/wp-content/uploads/2021/03/icone-pdf-symbole-png-rouge.png', name: 'Procastination is the cause of failure.pdf' },
    // Add more PDF blocks as needed
  ]);

  const handleDelete = (id) => {
    const updatedBlocks = pdfBlocks.filter((block) => block.id !== id);
    setPdfBlocks(updatedBlocks);
  };

  return (
    <div>
      {pdfBlocks.map((block) => (
        <PdfBlock
          key={block.id}
          logo={block.logo}
          name={block.name}
          onDelete={() => handleDelete(block.id)}
        />
      ))}
    </div>
  );
};

export default PdfBlockList;