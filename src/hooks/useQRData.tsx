import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase-client";
import { QRData } from "@/types/types";

function useQRData(id: string) {
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
  }, [id]);

  return QRData;
}

export { useQRData };
