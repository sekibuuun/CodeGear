import React from "react";

import { Session } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

import { Modal } from "./modal";
import { ProfileImg } from "./profileImg";

const Icon: React.FC<{
  src: string;
  session: Session | undefined;
  fallback: string;
}> = ({ src, session, fallback }) => {
  const basePath = "/CodeGear";
  return (
    <div>
      {session ? (
        <Link
          key={session.user.id}
          to={`/${basePath}/users/${session.user.id}`}
          state={{ user: session.user }}
        >
          <ProfileImg src={src} fallback={fallback} />
        </Link>
      ) : (
        <Modal component={<ProfileImg src={src} fallback={fallback} />} />
      )}
    </div>
  );
};

export { Icon };
