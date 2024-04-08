import React from "react";

import { Github } from "lucide-react";
import { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@/hooks/useUser";

const Modal: React.FC<{ component: React.ReactNode }> = ({ component }) => {
  const { session, signInWithGithub, signOut } = useUser();
  return (
    <div>
      <Toaster />
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="text-white p-0">
              {component}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-2/3 rounded-lg">
            <DialogHeader className="text-left">
              <DialogTitle>{session ? "Sign out" : "Sign in"}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {session ? (
                <Button
                  className="text-white flex items-center justify-center w-full"
                  onClick={() => signOut()}
                >
                  Click here
                </Button>
              ) : (
                <Button
                  className="text-white flex items-center justify-center w-full"
                  onClick={() => signInWithGithub()}
                >
                  <Github className="w-6 h-6 mr-2 text-white" />
                  GitHub
                </Button>
              )}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { Modal };
