import { useEffect, useState } from "react";

import { Session } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase-client";

function useUser() {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({ provider: "github" });
  }

  function signOut() {
    supabase.auth.signOut();
  }

  return {
    session,
    signInWithGithub,
    signOut,
  };
}

export { useUser };
