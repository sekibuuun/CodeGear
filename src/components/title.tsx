import React from "react";

import { Link } from "react-router-dom";

const Title: React.FC = () => {
  return (
    <Link to="/" className="text-2xl">
      CodeGear
    </Link>
  );
};

export { Title };
