import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Icon: React.FC<{ src: string; fallback: string }> = ({
  src,
  fallback,
}) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export { Icon };
