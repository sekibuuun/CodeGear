import React, { useState } from "react";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";
import { Social } from "../types";

const Top: React.FC = () => {
  const [userId, serUserId] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [logo, setLogo] = useState<React.ReactNode | string | null>(null);
  const [completeUrl, setCompleteUrl] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const idHandler = (userId: string) => {
    serUserId(userId);
  };

  const generateQRcode = (url: string, userId: string) => {
    setCompleteUrl(url + userId);
    setIsGenerated(true);
    setUrl("");
    serUserId("");
  };

  const urlHandler = (social: Social) => {
    setUrl(social.url);
    setLogo(social.logo);
    setIsGenerated(false);
  };

  return (
    <div>
      <div>
        <select
          onChange={(e) => urlHandler(socials[e.target.selectedIndex - 1])}
        >
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
      {isGenerated && <GenerateQR url={completeUrl} logo={logo} />}
    </div>
  );
};

export { Top };
