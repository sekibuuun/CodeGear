import { Session } from "@supabase/supabase-js";
import QRCodeStyling from "qr-code-styling-2";
import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase-client";
import { Social } from "@/types/types";

const saveQR = async (
  qrCode: QRCodeStyling,
  session: Session,
  social: Social,
): Promise<void> => {
  const file = await qrCode.getRawData(); // QRコードのデータを取得
  if (!file) {
    toast.error("Failed to get QR code image.");
    return;
  }
  const filePath = `${social.service}/${session?.user.id}`; // useTopからSNSを取得し、pathにユーザーIDを追加

  const { error } = await supabase.storage
    .from("QRcode_img")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    }); // ファイルをストレージにアップロード
  if (error) {
    toast.error("Failed to upload QR code image.");
  }

  // 画像のURLを取得
  const { data } = await supabase.storage
    .from("QRcode_img")
    .getPublicUrl(filePath);
  const imageUrl = data?.publicUrl;

  // 画像のURLをDBに保存
  await supabase.from("qr_codes").insert({
    user_id: session?.user.id,
    qr_code_type: social.service,
    qr_code_image: imageUrl,
  });
  toast.success("QR code saved successfully.");
};

export { saveQR };
