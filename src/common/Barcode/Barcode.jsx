import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = ({ value, height, width }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    JsBarcode(canvasRef.current, value, {
      height: height,
      width: width
    });
  }, [value, height, width]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Barcode;