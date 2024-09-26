import React from "react";

function Alert(props) {
  const capitalize = (string) => {
    if (!string) return "";
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);   // in order to capitalize first character of success (type+)
  };

  return (
    <>
      {props.alert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
}

export default Alert;

