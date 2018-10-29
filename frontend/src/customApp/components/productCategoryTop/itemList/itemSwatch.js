import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "antd";
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

const Swatch = styled(Card.Grid)`
  width: 20% !important;
  box-shadow: none !important;
  padding: 0 !important;
  font-size: 9pt;
  :hover{
    cursor:pointer;
  }
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  overflow:hidden;
  border-radius:50%;


  :hover{
    border:2px solid grey;
  }

  img{
    border-radius:50%;
    padding:1px;
    border:1px solid white;
    position:
  }
`;


class ItemSwatch extends Component {
  
  state = {
    expanded: false
    
  };

  SwatchItem = () =>{
    const { swatches, changeSwatch } = this.props;
    const swatchLength = this.state.expanded
      ? swatches.length
      : swatches.length < 4
        ? swatches.length
        : 4;
    let items = [];

    for (let i = 0; i < swatchLength; i++) {
      let jancode = swatches[i].jancode;
      let nostock = swatches[i].nostock;
      items.push(
        <Swatch key={i} onMouseOver={() => changeSwatch(jancode, nostock)}>
          <ImageWrapper>
            <img
              src={`https://img.muji.net/img/item/${jancode}_99_95.jpg`}
              alt=""
            />
          </ImageWrapper>
        </Swatch>
      );
    }

    return (
    <div>
    {items}
    </div>
    );
  }


  render() {
    const { swatches } =this.props;
    return(
      <div style={{justifyContent:"start", margin:"5px 0 4px",}}>
        <this.SwatchItem />
        <Link to={``}>
        {this.items}
        </Link>
        {!this.state.expanded && swatches.length > 4 && 
        <Swatch onClick={()=>{ this.state.expanded = true;}} >
        他10色
        <p>
          <Icon type="down" theme="outlined" />
        </p>
        </Swatch>
        }
        {this.state.expanded &&
        <Swatch onClick={()=>{ this.state.expanded = false}}>
          <Icon type="up" theme="outlined" />
          <p>
          閉じる
          </p>
        </Swatch>
        }
        
      </div>
    );
    

  }
}

export default ItemSwatch;
