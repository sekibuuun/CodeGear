import React from "react";

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

const Modal: React.FC = () => {
  const { session, signInWithGithub, signOut } = useUser();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-white p-0">
            Sign in
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {session ? (
              <Button onClick={() => signOut()}>Sign out</Button>
            ) : (
              <Button onClick={() => signInWithGithub()}>
                Sign in with GitHub
              </Button>
            )}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { Modal };
