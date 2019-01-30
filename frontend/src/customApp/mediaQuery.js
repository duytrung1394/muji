// import styled from "styled-components";
import { generateMedia } from "styled-media-query";

// Ant Design の値をそのまま持ってきている。
// media.lessThan('xs') のようにするとmedia queryが反映される。
// Ant Design と境界条件を一致させるには greaterThan ではなく lessThan を使うのがよい。
// greaterThanを使ってしまうと横幅がちょうど576pxの時などに条件が一致しないので好ましくない。
// https://ant.design/components/grid/

export const mediaConfig = {
    xl: '1600px',
    lg: '1200px',
    md: '992px',
    sm: '768px',
    xs: '576px',
  };

export default generateMedia(mediaConfig);
