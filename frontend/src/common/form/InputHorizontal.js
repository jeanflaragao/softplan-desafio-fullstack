import React from "react";

export default props => (
  <div className="form-group">
    <label htmlFor={props.id} className="col-sm-2 control-label">
      {props.label}
    </label>

    <div className="col-sm-10">
      <input
        {...props.input}
        type={props.type}
        className="form-control"
        placeholder={props.placeHolder}
        readOnly={props.readOnly}
      />
    </div>
  </div>
);
