import React from "react";

import { Toaster } from "react-hot-toast";

import { GenerateQRProps } from "../../types/types";

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
import { saveQR } from "@/lib/saveQR";

const GenerateQR: React.FC<GenerateQRProps> = ({
  url,
  social,
}: GenerateQRProps) => {
  const generateQRHooks = useGenerateQR({ url, social });
  const { session } = useUser();

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
              <Button
                className="bg-gray-800 w-[300px] px-2.5"
                onClick={() => saveQR(generateQRHooks.qrCode, session, social)}
              >
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
