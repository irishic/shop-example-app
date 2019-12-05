import React from "react";

import "./form-input.scss";

function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="input-group">
      <input type="text" onChange={handleChange} {...props} />
      {label ? (
        <label className={`${props.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
