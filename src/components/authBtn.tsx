import React from "react";

import { useUser } from "@/hooks/useUser";

const AuthBtn: React.FC = () => {
  const { session } = useUser();
  return <div>{session ? "Sign out" : "Sign in"}</div>;
};

export { AuthBtn };
