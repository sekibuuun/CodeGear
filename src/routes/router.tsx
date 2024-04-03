import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import { Mypage } from "@/components/mypage";
import { Top } from "@/components/top";
import { useUser } from "@/hooks/useUser";

const Router: React.FC = () => {
  const { session } = useUser();
  const basePath = "/CodeGear";
  return (
    <Routes>
      <Route path={basePath} element={<Top />} />
      {session ? (
        <Route path={`/${basePath}/users/:id`} element={<Mypage />} />
      ) : (
        <Route
          path={`/${basePath}/users/:id`}
          element={<Navigate to="/CodeGear" replace />}
        />
      )}
    </Routes>
  );
};

export { Router };
