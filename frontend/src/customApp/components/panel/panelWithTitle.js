import React from "react";
import { Link } from "react-router-dom";
import PanelWithTitleWrapper from "./panelWithTitle.style";

const panelWithTitle = props => {
  return (
    <PanelWithTitleWrapper>
    <section>
      <header>
        <h3>{props.title}</h3>
        <span className="panel-with-title-tool">{props.tool && props.tool}</span>
        <span className="panel-with-title-link">
          {props.link_path && <Link to={props.link_path}>{props.link_title}</Link>}
          {props.link_url && <a href={props.link_url}>{props.link_title}</a>}
        </span>
      </header>
      {props.children}
    </section>
    </PanelWithTitleWrapper>
  );
}

export default panelWithTitle;
