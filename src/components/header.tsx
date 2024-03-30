import React from "react";

// import { Icon } from "./icon";
// import { Modal } from "./modal";

const Header: React.FC = () => {
  return (
    <div className="px-10 flex justify-center items-center h-14 bg-gray-800 text-white">
      {/* <Icon src="" fallback="CN" /> */}
      <h1 className="text-2xl">CodeGear</h1>
      {/* <Modal /> */}
    </div>
  );
};

export { Header };
