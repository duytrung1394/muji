import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
//import styled from "styled-components";
const style = {
  borderBottom: '1px solid #eee'
};

const Grid = Card.Grid;

const IconList = props => {
  return (
    <props.wrapper>
      {props.items &&
        props.items.map((item, index) => {
        return (
            <Grid bordered={false} key={index} className={props.className}>
            <Link to="" className={props.childClassName}>
              <div className="box1">
                <img src={item.img_src} alt="" className={props.childClassName} />
              </div>
              <div className="box2">
                {item.title && <span className={props.childClassName}>{item.title}</span>}
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
