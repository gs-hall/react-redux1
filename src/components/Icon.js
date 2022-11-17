import React from "react";
import classnames from "classnames";
import "../fa/css/font-awesome.min.css";

export default function Icon({icon, className, ...rest}) {
  if (!icon) return null;
  return (
    <i className={classnames("fa", icon, className)} {...rest} />
  );
};

