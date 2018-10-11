import styled from "styled-components";

const DailyMujiWrapper = styled.div`
.dailyMuji-frame {margin: 0; width: 100%; text-align: center; border-radius: 5px; border: 1px solid #ddd; overflow: hidden;},
.dailyMuji-frame-caption {color: #7f0019; font-weight: bold; display: block; margin: 0;},
.dailyMuji-content-frame h2 {font-size: 22px; font-weight: bold; margin-bottom: 20px;},
.dailyMuji-content-frame {width: 100%;},
.dailyMuji-item-group {width: 100%; padding: 0px 0px 0px 0px;},
.dailyMuji-item-group li {width:100%; height:auto;},
.dailyMuji-item-group img {width: 100%;},
.dailyMuji-item-group ul {display: flex; max-width: 150%; justify-content: center; list-style: none; padding: 0;},
`
export default DailyMujiWrapper;
