import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

const Grid = Card.Grid;

const IconList = props => {
  return (
    <props.wrapper>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Grid key={index} className={props.className}>
              <Link to="" className={props.childClassName}>
                <div className="box-left">
                  <img
                    src={item.img_src}
                    alt=""
                    className={props.childClassName}
                  />
                </div>
                <div className="box-right">
                  {item.title && (
                    <span className={props.childClassName}>{item.title}</span>
                  )}
                </div>
              </Link>
              {item.description && <p>{item.description}</p>}
            </Grid>
          );
        })}
    </props.wrapper>
  );
};

export default IconList;
