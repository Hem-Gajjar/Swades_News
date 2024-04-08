import React from "react";
import loading from "./loading.gif";
function Spinner() {
  return (
    <div className="text-center">
      <img
        src={loading}
        style={{ height: "150px", width: "150px" }}
        alt="loading"
      />
    </div>
  );
}

export default Spinner;
