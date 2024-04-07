import React from "react";

import toast, { Toaster } from "react-hot-toast";

import { GenerateQRProps } from "../types/types";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGenerateQR } from "@/hooks/useGenerateQR";
import { useUser } from "@/hooks/useUser";
import { supabase } from "@/lib/supabase-client";

const GenerateQR: React.FC<GenerateQRProps> = ({
  url,
  social,
}: GenerateQRProps) => {
  const generateQRHooks = useGenerateQR({ url, social });
  const { session } = useUser();

  const saveQR = async () => {
    const file = await generateQRHooks.qrCode.getRawData(); // QRコードのデータを取得
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
  return (
    <div className="QRCode">
      <Toaster />
      <div className="flex justify-center">
        <div ref={generateQRHooks.ref} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center">
          <Button asChild variant="link" className="p-0">
            <a
              href={generateQRHooks.options.data}
              target="_blank"
              rel="noreferrer"
            >
              {generateQRHooks.options.data}
            </a>
          </Button>
          {session && (
            <div className="flex justify-center">
              <Button className="bg-gray-800 w-[300px] px-2.5" onClick={saveQR}>
                QR Save
              </Button>
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <Select
            onValueChange={generateQRHooks.onExtensionChange}
            value={generateQRHooks.fileExt}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="bg-gray-800"
            onClick={generateQRHooks.onDownloadClick}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export { GenerateQR };
