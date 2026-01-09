import React from "react";

const MainSign: React.FC<SignProps> = ({
  text = "Kate's Library",
  onClick,
}) => {
  return (
    <div className="sign" onClick={onClick}>
      {text}
    </div>
  );
};

export default MainSign;
