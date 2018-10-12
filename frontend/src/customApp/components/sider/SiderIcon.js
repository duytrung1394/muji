import React from 'react';


class SiderIcon extends React.Component {

  render() {
   
    return (
      <div>
          <img {...this.props} style={{width:"10%", height:"20px", display:"inline", marginRight:"5px"}} />
          <h3 style={{display:"inline"}} >
          </h3>
      </div>
    );
  }

}

export default SiderIcon;