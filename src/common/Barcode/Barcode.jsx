import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';

const Barcode = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    JsBarcode(canvasRef.current, value);
  }, [value]);

//   const handlePrint = () => {
//     const canvas = canvasRef.current;
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'PNG', 0, 0);
//     pdf.save('barcode.pdf');
//   };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      {/* <button onClick={handlePrint}>Print Barcode</button> */}
    </div>
  );
};

export default Barcode;