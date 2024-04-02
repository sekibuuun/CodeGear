import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Session } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase-client";

import toast from "react-hot-toast";

function useUser() {
  const [session, setSession] = useState<Session | null>();
  const navigate = useNavigate();

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

  async function signInWithGithub() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      if (!error) {
        toast.success("Signed in successfully");
      }
    } catch (error: any) {
      console.error("Error: ", error.message);
      toast.error("Error signing in");
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        navigate("/");
        toast.success("Signed out successfully");
      }
    } catch (error: any) {
      console.error("Error: ", error.message);
      toast.error("Error signing out");
    }
  }

  return {
    session,
    signInWithGithub,
    signOut,
  };
}

export { useUser };
