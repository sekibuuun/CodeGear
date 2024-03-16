import React from "react";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTop } from "@/hooks/useTop";

const Top: React.FC = () => {
  const topHooks = useTop();

  return (
    <div className="m-10 flex flex-col gap-5">
      <div>
        <Select onValueChange={topHooks.onSelected}>
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
      </div>
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Enter your URL"
          aria-label="url"
          type="text"
          value={topHooks.social.url + topHooks.userId}
          disabled={topHooks.isInputUrlDisabled}
        />
        <div className="flex gap-10">
          <Input
            placeholder="Enter your userId"
            aria-label="userId"
            type="text"
            value={topHooks.userId}
            onChange={(e) => topHooks.idHandler(e.target.value)}
            className="flex-1"
            disabled={topHooks.isInputIdDisabled}
          />
          <Button
            onClick={() =>
              topHooks.generateQRcode(topHooks.social, topHooks.userId)
            }
            className="flex-none bg-gray-800"
          >
            Generate QR
          </Button>
        </div>
      </div>
      {topHooks.isDisplayQR && (
        <GenerateQR url={topHooks.completeUrl} social={topHooks.social} />
      )}
    </div>
  );
};

export { Top };
