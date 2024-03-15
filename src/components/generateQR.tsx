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

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as Extension);
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
      <div style={styles.inputWrapper}>
        <input
          value={options.data}
          onChange={onDataChange}
          style={styles.inputBox}
        />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="svg">SVG</option>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
    </div>
  );
};

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "300px",
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};

export { GenerateQR };
