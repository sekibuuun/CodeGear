import React from "react";

import { Icon } from "./icon";
import { Modal } from "./modal";

import { useUser } from "@/hooks/useUser";

const Header: React.FC = () => {
  const { session } = useUser();
  return (
    <div className="px-10 flex justify-between items-center h-14 bg-gray-800 text-white">
      <Icon src={session?.user.user_metadata.avatar_url} fallback="CN" />
      <h1 className="text-2xl">CodeGear</h1>
      <Modal />
    </div>
  );
};

export { Header };
