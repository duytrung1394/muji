import styled from "styled-components";
import { BaseContentLayout} from "../../components/panel/contentLayout"

const NoticeWrapper = styled(BaseContentLayout)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #DEDEDE;
  border-radius: 6px;
  max-width: 680px;
  
  dl {
    max-width: 1440px;
    margin: 0 auto;
    display: table;

    & > dt {
      font-size: 13px;
      font-weight: 600;
      display: table-cell;
    }
                
    & > dd > a {
      color: #777;
      line-height: 1.7; 
      text-decoration: underline;
      -moz-transition: ease 0.2s;
      -o-transition: ease 0.2s;
      -webkit-transition: ease 0.2s;
      transition: ease 0.2s;
      font-weight:normal;
      margin:0;

      &:hover {
        color: #555;
      }
    }
  }

  .notice-title {
    padding-right:10px;
  }

  .notice-list {
    margin-bottom:0;
  }

`
export default NoticeWrapper;
