import React, { useState, useEffect } from "react";

import { socials } from "../sns";
import { Social } from "../types";

const Top: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [logo, setLogo] = useState<React.ReactNode | string | null>(null);
  const [completeUrl, setCompleteUrl] = useState<string>("");

  const idHandler = (id: string) => {
    setId(id);
  };

  const generateQRcode = (url: string, xId: string) => {
    setCompleteUrl(url + xId);
    setUrl("");
    setId("");
  };

  useEffect(() => {
    console.log(completeUrl);
    console.log("logo" + logo);
  }, [completeUrl]);

  const urlHander = (social: Social) => {
    setUrl(social.url);
    setLogo(social.logo);
    console.log(social.url);
    console.log(social.logo);
  };

  return (
    <div>
      <div>
        <select
          onChange={(e) => urlHander(socials[e.target.selectedIndex - 1])}
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
    </div>
  );
};

export { Top };
