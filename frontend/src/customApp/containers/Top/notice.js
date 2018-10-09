import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";


const notice = props => {
  const { notices } = props;
  return (
    <div>
      <p style={{marginLeft:'500px', marginRight:'600px'}}>
      <div  style={{border:'1px solid #dcdfe5', padding:'10px 50px'}}>
      <IntlMessages id="top.attributes.notices"/>
        <ul>
          {
            notices && notices.map(notice => {
              return <u><a href="https://www.muji.net/store/cmdty/donation/0299671000000" style={{color:'grey'}}
              ><li>{notice.title}</li></a></u>
            })
          }
        </ul>
        </div>
      </p>
    </div>
  );
}

export default notice;
