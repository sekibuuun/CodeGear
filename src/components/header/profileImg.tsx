import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileImg: React.FC<{
  src: string;
  fallback: string;
}> = ({ src, fallback }) => {
  return (
    <Avatar className="bg-white">
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export { ProfileImg };
