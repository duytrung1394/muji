import styled from "styled-components";

const NetStoreWrapper = styled.div`


@media screen and (min-width: 1025px) /* PC */ {
  .ant-card-cover > *
  {
    width: PC;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 1024px) /* Mobile */ {
  .ant-card-cover > *
  {
    width: 64%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 1200px) {
  /*
  .ant-card-cover > *
  {
    width: 64%;
    margin-left: auto;
    margin-right: auto;
  }
  */
}
.ant-card-meta-title
{
  font-weight: bold;
},
.cards-meta3 {
  padding-bottom: 5px;
},
.ant-col-4 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 12.666667%;
    margin-left: 5x;
    margin-right: 4%;
}
@media screen and (max-width: 1200px) /* Mobile */ {
  .ant-col-4
  {
    margin-right: 13%;
    margin-left: 7%;
  }
}
.ant-card-meta {
    margin: 0px;
},
.ant-row
{
  line-height: 1.3 !important;
},
.ant-card-body
{
  padding-top: 10px !important;
  padding-right: 0px;
  padding-left: 0px;
  padding-bottom: 0px;
},
.cards-meta2 ant-card-meta-title
{
  font-size: 18px !important;
},
.ant-card-meta-description
{
  font-size: 10px !important;

},
.net-store-frame h2 span
{
  font-weight: 900;
},
//
.net-store-frame:hover
{
  filter: brightness(0.85);
},
.net-store-frame
{
  margin-left: -10px;
  margin-right: -10px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: filter 0.2s ease;
  background: white;
  filter: brightness(1);
},
.net-store-frame a
{
  text-decoration: none;
  display: block;
  color: #333;
},
.net-store-frame h2
{
  font-size: 20px;
  margin-top 20px;
  // margin-bottom 60px;
},
.net-store-frame ul
{
  display: flex;
  justify-content: center;
  list-style: none;
},
.net-store-image-group li
{
  width: 15%; margin: 10px;
},
.net-store-image-group img
{
   max-width: 100%;
   max-height:70px;
   margin:0;
 },
.net-store-image-group figure
{
  width: 100%;
  max-height:100%;
},
.note-lines0
{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 10px;
  margin: 0px;
},
.note-lines1{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 10px;
    margin: 0px;
},
.note-lines2{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 10px;
    margin: 0px;
},
.note-lines3{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 10px;
    margin: 0px;
},
.subtitle0
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},
.subtitle1
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},
.subtitle2
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},
.subtitle3
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},
.subtitle4
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},
.subtitle5
{
  margin: 0;
  font-size: large;
  font-weight: bold;
  color: #7f0019;
  line-height: 1.3em;
},

.subtitle0 .subtitle-lines2
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle1 .subtitle-lines2
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle2 .subtitle-lines0
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle2 .subtitle-lines1{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle2 .subtitle-lines1
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle3 .subtitle-lines0
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle3 .subtitle-lines1
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle4 .subtitle-lines0
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle4 .subtitle-lines1
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle5 .subtitle-lines0
{
  font-size: 25px;
  margin 10;
  border:none;
},
.subtitle5 .subtitle-lines1
{
  font-size: 25px;
  margin 10;
  border:none;
},
`
export default NetStoreWrapper;
