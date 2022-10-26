import React from 'react';
import jsPDF from 'jspdf';

const PDF = ({ courseDetails }) => {
   const pdfGenerator = () => {
      const { image_url, title, name } = courseDetails;
      const doc = new jsPDF('landscape', 'px', 'a4', 'false');
      doc.addImage(`${image_url}`, 'PNG', 65, 20, 500, 400);
      doc.text(`${title}`, 10, 10);
      doc.save(`${name}.pdf`);
   }
   return (
      <div>
         <button onClick={pdfGenerator} className="btn btn-sm">Download PDF</button>
      </div>
   );
};

export default PDF;