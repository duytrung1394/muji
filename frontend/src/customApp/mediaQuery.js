// import styled from "styled-components";
import { generateMedia } from "styled-media-query";

// Ant Design の値をそのまま持ってきている。
// media.greaterThan('xs') のようにするとmedia queryが反映される。
// Ant Design と境界条件を一致させるには lessThan ではなく greaterThan を使うのがよい。
// lessThanを使ってしまうと横幅がちょうど576pxの時などに条件が一致しないので好ましくない。
// https://ant.design/components/grid/

export const mediaConfig = {
  xxl: "1600px",
  xl: "1200px",
  lg: "992px",
  md: "768px",
  sm: "576px"
};

export default generateMedia(mediaConfig);
