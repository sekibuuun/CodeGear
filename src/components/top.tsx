import React, { useState, useEffect } from "react";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";
import { Social } from "../types";

const Top: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [logo, setLogo] = useState<React.ReactNode | string | null>(null);
  const [completeUrl, setCompleteUrl] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const idHandler = (id: string) => {
    setId(id);
  };

  const generateQRcode = (url: string, id: string) => {
    setCompleteUrl(url + id);
    setIsGenerated(true);
    setUrl("");
    setId("");
  };

  useEffect(() => {
    console.log(completeUrl);
    console.log("logo" + logo);
  }, [completeUrl, logo]);

  const urlHandler = (social: Social) => {
    setUrl(social.url);
    setLogo(social.logo);
    setIsGenerated(false);
    console.log(social.url);
    console.log(social.logo);
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
          type="text"
          value={id}
          onChange={(e) => idHandler(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => generateQRcode(url, id)}>
          Generate QR code
        </button>
      </div>
      {isGenerated && <GenerateQR url={completeUrl} logo={logo} />}
    </div>
  );
};

export { Top };
