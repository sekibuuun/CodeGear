import React, { useState } from "react";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";
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

import "../styles/top.css";

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

  const onSelected = (value: string) => {
    const selectedSocial = socials.find((social) => social.service === value);
    if (selectedSocial) {
      urlHandler(selectedSocial);
    }
  };

  return (
    <div>
      <Select onValueChange={onSelected}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select SNS" />
        </SelectTrigger>
        <SelectContent>
          {socials.map((social, index) => (
            <SelectItem value={social.service} key={index}>
              {social.service}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <Input
          placeholder="Enter your user id"
          aria-label="userId"
          type="text"
          value={userId}
          onChange={(e) => idHandler(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => generateQRcode(url, userId)}>
          Generate QR code
        </Button>
      </div>
      {isGenerated && (
        <GenerateQR url={completeUrl} logo={logo} QRcolor={color} />
      )}
    </div>
  );
};

export { Top };
