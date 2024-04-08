import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import { Mypage } from "@/components/mypage/mypage";
import { Top } from "@/components/top/top";
import { useUser } from "@/hooks/useUser";

const Router: React.FC = () => {
  const { session } = useUser();
  const basePath = "/CodeGear";
  return (
    <Routes>
      <Route path={basePath} element={<Top />} />
      {session ? (
        <Route
          path={`${basePath}/users/:id`}
          element={
            <Mypage
              id={session.user.id}
              name={session.user.user_metadata.name}
            />
          }
        />
      ) : (
        <Route
          path={`${basePath}/users/:id`}
          element={<Navigate to={`${basePath}`} replace />}
        />
      )}
    </Routes>
  );
};

export { Router };
