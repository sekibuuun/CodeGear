import { useState } from "react";

import { socials } from "../sns";
import { Social } from "../types/types";

const useTop = () => {
  const [userId, setUserId] = useState<string>("");
  const [social, setSocial] = useState<Social>({} as Social);
  const [emptyUrl, setEmptyUrl] = useState<string>("");
  const [completeUrl, setCompleteUrl] = useState<string>("");
  const [isDisplayQR, setIsDisplayQR] = useState<boolean>(false);
  const [isInputUrlDisabled, setIsInputUrlDisabled] = useState<boolean>(true);
  const [isInputIdDisabled, setIsInputIdDisabled] = useState<boolean>(true);

  const idHandler = (userId: string) => {
    setUserId(userId);
  };

  const urlHandler = (url: string) => {
    setEmptyUrl(url);
  };

  const generateQRcode = (social: Social, userId: string) => {
    setCompleteUrl(social.url + userId);
    setIsDisplayQR(true);
    setUserId("");
  };

  const socialHandler = (social: Social) => {
    setSocial(social);
    setIsDisplayQR(false);
  };

  const onSelected = (value: string) => {
    const selectedSocial = socials.find((social) => social.service === value);
    if (selectedSocial) {
      socialHandler(selectedSocial);
      setIsInputUrlDisabled(value !== "None");
      setIsInputIdDisabled(value === "None");
      setEmptyUrl("");
    }
  };
  return {
    userId,
    social,
    emptyUrl,
    completeUrl,
    isDisplayQR,
    isInputUrlDisabled,
    isInputIdDisabled,
    idHandler,
    urlHandler,
    generateQRcode,
    socialHandler,
    onSelected,
  };
};

export { useTop };
