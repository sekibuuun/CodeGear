import { useState, useEffect, useRef, ChangeEvent } from "react";

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

import { Social } from "../types/types";

type GenerateQRProps = {
  url: string;
  social: Social;
};

const useGenerateQR = ({ url, social }: GenerateQRProps) => {
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
    imageOptions: {
      margin: 20,
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

  return {
    ref,
    options,
    fileExt,
    onDataChange,
    onExtensionChange,
    onDownloadClick,
  };
};

export { useGenerateQR };
