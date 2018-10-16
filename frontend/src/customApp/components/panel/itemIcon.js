import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import ListIconWrapper from "./itemIcon.style";

const Grid = Card.Grid;

const listIcon = props => {
  return (
    <ListIconWrapper>
      <Grid className="icon-list">
        <Link to="" className="list-icon">
          <div className="box-left">
            <img src={props.item.img_src} alt="" className="list-icon" />
          </div>
          <div className="box-right">
            {props.item.title && (
              <span className="list-icon">{props.item.title}</span>
            )}
          </div>
        </Link>
      </Grid>
    </ListIconWrapper>
  );
};

export default listIcon;
