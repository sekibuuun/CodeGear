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
