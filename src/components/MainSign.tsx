import React from "react";

const MainSign: React.FC<SignProps> = ({
  title = "Kate's Library",
  onClick,
}) => {
  return (
    <div className="sign" onClick={onClick}>
      {title}
    </div>
  );
};

export default MainSign;
