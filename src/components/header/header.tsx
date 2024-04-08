import React from "react";

import { AuthBtn } from "./authBtn";
import { Icon } from "./icon";
import { Modal } from "./modal";
import { Title } from "./title";

import { useUser } from "@/hooks/useUser";
const Header: React.FC = () => {
  const { session } = useUser();
  return (
    <div className="px-10 flex justify-between items-center h-14 bg-gray-800 text-white">
      {session ? (
        <Icon
          src={session.user.user_metadata.avatar_url}
          session={session}
          fallback="CN"
        />
      ) : (
        <Icon src="" session={undefined} fallback="CN" />
      )}
      <Title />
      <Modal component={<AuthBtn />} />
    </div>
  );
};

export { Header };
