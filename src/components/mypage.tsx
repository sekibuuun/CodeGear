import React, { Suspense } from "react";

import { useQRData } from "@/hooks/useQRData";

const Mypage: React.FC<{
  id: string;
  name: string;
}> = ({ id, name }) => {
  const QRData = useQRData(id);

  return (
    <div className="mypage px-10">
      <div className="text-2xl font-bold my-3">{name}&apos;s QRCode</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {QRData?.map((qr, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <p className="flex justify-center text-xl font-bold">
                {qr.qr_code_type}
              </p>
              <img src={qr.qr_code_image} alt="QR Code" className="mx-auto" />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export { Mypage };
