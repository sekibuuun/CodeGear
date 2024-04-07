import React, { Suspense } from "react";

import { useQRData } from "@/hooks/useQRData";

const Mypage: React.FC<{
  id: string;
  name: string;
}> = ({ id, name }) => {
  const QRData = useQRData(id);

  return (
    <div>
      <div>{name}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {QRData.map((qr, index) => (
            <div key={index}>
              <p>{qr.qr_code_type}</p>
              <img src={qr.qr_code_image} alt="QR Code" />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export { Mypage };
