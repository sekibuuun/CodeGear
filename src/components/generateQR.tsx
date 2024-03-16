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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import "../styles/generateQR.css";

type GenerateQRProps = {
  url: string;
  logo: React.ReactNode | string | null;
  QRcolor: string;
};

const GenerateQR: React.FC<GenerateQRProps> = ({
  url,
  logo,
  QRcolor,
}: GenerateQRProps) => {
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    type: "svg" as DrawType,
    data: url,
    image: typeof logo === "string" ? logo : undefined,
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
      color: QRcolor,
      type: "dots" as DotType,
    },
    cornersSquareOptions: {
      color: QRcolor,
      type: "extra-rounded" as CornerSquareType,
    },
    cornersDotOptions: {
      color: QRcolor,
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
      <div ref={ref} />
      <div>
        <Input
          value={options.data}
          onChange={onDataChange}
          className="w-full mt-4"
        />
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
        <Button onClick={onDownloadClick}>Download</Button>
      </div>
    </div>
  );
};

export { GenerateQR };
