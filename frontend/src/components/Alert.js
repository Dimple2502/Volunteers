import React, { useContext } from "react";
import alertContext from "./Alert/alertContext";
/**
uses the alertContext variable to get the msg and type from the context and displays the alert
 */
function Alert() {
    // on change of the context, the alert is displayed
  const context = useContext(alertContext);
  const { type, msg } = context;

  return (
    <>
      {/* <div style={{ height: "30px" }}> */}
        {msg && (
          <>
            <div
              className={`alert alert-${type} alert-dismissible fade show`}
              role="alert"
            >
              <strong>
                {type==="success"?(type.charAt(0).toUpperCase() +
                  type.slice(1)):"Error "}
              </strong>{" "}
              {msg}
            </div>
          </>
        )}
      {/* </div> */}
    </>
  );
}

export default Alert;