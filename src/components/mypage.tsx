import React, { useState, useEffect } from "react";

import { supabase } from "@/lib/supabase-client";
import { QRData } from "@/types/types";

const Mypage: React.FC<{
  id: string;
  name: string;
}> = ({ id, name }) => {
  const [QRData, setQRData] = useState<QRData>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("qr_codes")
        .select("qr_code_type, qr_code_image")
        .eq("user_id", id);
      setQRData(data || []);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>{name}</div>
      <div>
        {QRData.map((qr, index) => (
          <div key={index}>
            <p>{qr.qr_code_type}</p>
            <img src={qr.qr_code_image} alt="QR Code" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Mypage };
