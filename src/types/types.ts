export interface Social {
  service: string;
  url: string;
  logo: string | null;
  color: string;
}

export type GenerateQRProps = {
  url: string;
  social: Social;
};

export type QRDataType = {
  qr_code_type: string;
  qr_code_image: string;
}[];
