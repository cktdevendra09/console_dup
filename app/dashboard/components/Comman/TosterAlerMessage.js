import React from "react";

const TosterAlerMessage = ({message,messageType}) => {
  return (
    <>
      <div
        className={`fixed top-5 right-5 z-50 px-4 py-2 rounded-lg shadow-lg text-white text-sm transition-all duration-300 ${
          messageType === "success"
            ? "bg-green-600"
            : messageType === "error"
            ? "bg-red-600"
            : "bg-blue-600"
        }`}
      >
        {message}
      </div>
    </>
  );
};

export default TosterAlerMessage;
