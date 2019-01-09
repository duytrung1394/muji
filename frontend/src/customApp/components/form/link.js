import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Link = props => {
  if (typeof props.to === "string" && props.to.startsWith("http")) {
    return (
      <a href={props.to} {...props}>
        {props.children}
      </a>
    );
  } else {
    return <ReactRouterLink {...props}>{props.children}</ReactRouterLink>;
  }
};
