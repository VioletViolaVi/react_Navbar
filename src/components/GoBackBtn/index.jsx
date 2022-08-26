import React from "react";
import { useNavigate } from "react-router-dom";

import "./go_back_btn.css";

const GoBackBtn = () => {
  const navigate = useNavigate(); 

  function goBack() {
    return navigate(-1);
  }

  return (
    <>
      <aside className="go_back_btn_bg">
        <button onClick={goBack}>Go Back</button>
      </aside>
    </>
  );
};

export default GoBackBtn;
