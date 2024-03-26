import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <div className="px-10 flex justify-between items-center h-14 bg-gray-800 text-white">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl">CodeGear</h1>
      <Button asChild variant="link" className="text-white p-0">
        <a href="#">Login</a>
      </Button>
    </div>
  );
};

export { Header };
