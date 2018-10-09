import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";


const notice = props => {
  const { notices } = props;
  return (

      <div  style={{border:'1px solid #dcdfe5',width:'50%', margin:'0 auto',display:"flex",padding:'1% 3%', borderRadius:'8px'}}>
    
      <IntlMessages id="top.attributes.notices"/>
        <ul>
          {
            notices && notices.map(notice => {
              return <u><a href="https://www.muji.net/store/cmdty/donation/0299671000000" style={{color:'grey', fontWeight:'normal'}}
              ><li>{notice.title}</li></a></u>
            })
          }
        </ul>
        
        </div>
      
  );
}

export default notice;
