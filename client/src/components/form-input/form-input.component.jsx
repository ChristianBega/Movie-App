import React from "react";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem", marginBottom: "1.5rem" }}>
      {label && <label>{label}</label>}
      <input className="form-input" {...otherProps} />
    </div>
  );
};
