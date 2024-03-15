import React, { useEffect, useState } from "react";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";
import { Social } from "../types";

const Top: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [logo, setLogo] = useState<React.ReactNode | string | null>(null);
  const [color, setColor] = useState<string>("");
  const [completeUrl, setCompleteUrl] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const idHandler = (userId: string) => {
    setUserId(userId);
  };

  const generateQRcode = (url: string, userId: string) => {
    setCompleteUrl(url + userId);
    setIsGenerated(true);
    setUrl("");
    setUserId("");
  };

  const urlHandler = (social: Social) => {
    setUrl(social.url);
    setLogo(social.logo);
    setColor(social.color);
    setIsGenerated(false);
  };

  const onSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex - 1;
    if (selectedIndex >= 0) {
      urlHandler(socials[selectedIndex]);
    }
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div>
      <div>
        <select onChange={(e) => onSelected(e)}>
          <option value="">Select SNS</option>
          {socials.map((social, index) => (
            <option key={index} value={social.service}>
              {social.service}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          aria-label="userId"
          type="text"
          value={userId}
          onChange={(e) => idHandler(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => generateQRcode(url, userId)}>
          Generate QR code
        </button>
      </div>
      {isGenerated && (
        <GenerateQR url={completeUrl} logo={logo} QRcolor={color} />
      )}
    </div>
  );
};

export { Top };
