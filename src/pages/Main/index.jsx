import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate("/city");
  return (
    <div>
      Main Page
      <button onClick={onClickHandler}>Go to City Page</button>
    </div>
  );
};

export default Main;
