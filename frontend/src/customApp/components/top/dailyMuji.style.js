import styled from "styled-components";

const DailyMujiWrapper = styled.div`

.dailymuji-content-frame
{
  width: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 0 auto;
  background: white;
  transition: filter 0.2s ease;
},
.dailymuji-content-frame a
{
  padding: 20px;
},
.dailymuji-content-frame:hover
{
  width: 100%;
  filter: brightness(0.85);
},
.dailymuji-frame-subtitle
{
  color: #7f0019;
  font-weight: bold;
  display: block;
  margin: 0;
},
.dailymuji-content-frame h2
{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
},
.dailymuji-item-group
{
  width: 100%;
  filter: brightness(1);
},
.dailymuji-item-group li
{
  width:100%;
  height:auto;
},
.dailymuji-item-group img
{
  width: 100%;
},
.dailymuji-item-group ul
{
  display: flex;
  max-width: 150%;
  justify-content: center;
  list-style: none;
  padding: 0;
},


`
export default DailyMujiWrapper;
