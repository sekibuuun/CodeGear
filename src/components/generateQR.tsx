import React from "react";

import { Social } from "../types/types";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGenerateQR } from "@/hooks/useGenerateQR";

type GenerateQRProps = {
  url: string;
  social: Social;
};

const GenerateQR: React.FC<GenerateQRProps> = ({
  url,
  social,
}: GenerateQRProps) => {
  const generateQRHooks = useGenerateQR({ url, social });
  return (
    <div className="QRCode">
      <div className="flex justify-center">
        <div ref={generateQRHooks.ref} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <Button asChild variant="link" className="p-0">
            <a
              href={generateQRHooks.options.data}
              target="_blank"
              rel="noreferrer"
            >
              {generateQRHooks.options.data}
            </a>
          </Button>
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
