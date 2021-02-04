import React from "react";

export default function Button({ children, className, icon, disabled }) {
  return (
    <button className={`from-component ${className}`} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
