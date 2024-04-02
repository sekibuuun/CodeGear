import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import { Mypage } from "@/components/mypage";
import { Top } from "@/components/top";
import { useUser } from "@/hooks/useUser";

const Router: React.FC = () => {
  const { session } = useUser();
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      {session ? (
        <Route path="/:id" element={<Mypage />} />
      ) : (
        <Route path="/:id" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
};

export { Router };
