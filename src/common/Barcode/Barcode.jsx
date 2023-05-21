import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = ({ value, height, width, fontSize }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    JsBarcode(canvasRef.current, value, {
      height: height,
      width: width,
      fontSize: fontSize // Sử dụng cỡ chữ được chuyền vào từ props
    });
  }, [value, height, width, fontSize]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Barcode;
