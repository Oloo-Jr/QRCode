import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./QRCOdeGenerator.css"

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  const generateQRCode = () => {
    setGeneratedQRCode(url);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode-canvas');

    if (canvas) {
      const dataUrl = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'qrcode.png';
      a.click();
    }
  };

  return (
    <div className='qrcodeContainer' >
      <label>
        Enter URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button onClick={generateQRCode}>Generate QR Code</button>

      {generatedQRCode && (
        <div>
          <QRCode value={generatedQRCode} id="qrcode-canvas" />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
