import React from "react";

interface MainSignProps {
  text?: string;
  onClick?: () => void;
}

const MainSign: React.FC<MainSignProps> = ({
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
