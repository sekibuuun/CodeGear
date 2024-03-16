import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension,
  Options,
} from "qr-code-styling-2";

import { Social } from "../types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type GenerateQRProps = {
  url: string;
  social: Social;
};

const GenerateQR: React.FC<GenerateQRProps> = ({
  url,
  social,
}: GenerateQRProps) => {
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    type: "svg" as DrawType,
    data: url,
    image: typeof social.logo === "string" ? social.logo : undefined,
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: "Byte" as Mode,
      errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    dotsOptions: {
      color: social.color,
      type: "dots" as DotType,
    },
    cornersSquareOptions: {
      color: social.color,
      type: "extra-rounded" as CornerSquareType,
    },
    cornersDotOptions: {
      color: social.color,
      type: "dot" as CornerDotType,
    },
  });
  const [fileExt, setFileExt] = useState<Extension>("svg");
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  useEffect(() => {
    setOptions((options) => ({
      ...options,
      data: url,
    }));
  }, [url]);

  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };

  const onExtensionChange = (value: Extension) => {
    setFileExt(value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="QRCode">
      <div className="flex justify-center">
        <div ref={ref} />
      </div>
      <div className="flex flex-col gap-5">
        <Input
          value={options.data}
          onChange={onDataChange}
          className="w-full mt-4"
          disabled
        />
        <div className="flex gap-5">
          <Select onValueChange={onExtensionChange} value={fileExt}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gray-800" onClick={onDownloadClick}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export { GenerateQR };
