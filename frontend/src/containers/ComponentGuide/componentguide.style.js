import styled from 'styled-components';
import { transition, borderRadius, boxShadow } from '../../settings/style-util';
import WithDirection from '../../settings/withDirection';

const WDTodoWrapper = styled.div`
  padding: 50px 35px;

  @media only screen and (max-width: 767px) {
    padding: 30px 20px;
  }
  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 40px 20px;
  }

  .isoGuideHeader {
    padding: .5em 0 .5em .5em;
    border-left: 6px solid #000000;
    border-bottom: 1px solid #000000;
    margin-top: 2em;
    margin-bottom: 1em;

    @media only screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .isoGuideHeader.c1 {
    border-bottom: 0px;
    border-left: 0px;
    margin-top: 0.3em;
    margin-bottom: 0.1em;
  }

  .isoGuideHeader.c2 {
    border-bottom: 0px;
    border-left: 0px;
    margin-top: 0.1em;
    margin-bottom: 0.2em;
  }

  .isoGuideCode {
    border: none;
    background: #222;
    margin: 0.5em;
    padding: 0.5em;
    font-size: 13px;
    color: #fff;
    overflow: auto;
  }
  
  .sampleContainer {
    margin-top: 0.2em;
    margin-bottom: 1em;
    background-color: #fff;
    padding: 1.0em;
    padding-left: 1.5em;
    color: #000;
    font-size: 1.2em;
  }

  .ghostButtonContainer {
    background-color: #222;
  }

  .simpleListContainer li:before {
    content: '・'
  }

`;

const ComponentGuideWrapper = WithDirection(WDTodoWrapper);
export { ComponentGuideWrapper };
