import React from "react";

import { Link } from "react-router-dom";

const Title: React.FC = () => {
  const basePath = "/CodeGear";
  return (
    <Link to={basePath} className="text-2xl">
      CodeGear
    </Link>
  );
};

export { Title };
