import styled from "styled-components";


const NoticeWrapper = styled.div`

.noticeContents {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid #DEDEDE;
    border-radius: 6px;
    width: auto;
    max-width: 680px;
    margin: 15px auto;
    padding: 10px 15px;
    position: relative;
}
.noticeContents > dl {
    max-width: 1440px;
    margin: 0 auto;
    display: table;
}
.noticeContents > dl > dt {
    font-size: 13px;
    font-weight: 600;
    display: table-cell;
}
            

.noticeContents > dl > a {
    color: #777;
    line-height: 1.7;
    display: block;
    text-decoration: underline;
    -moz-transition: ease 0.2s;
    -o-transition: ease 0.2s;
    -webkit-transition: ease 0.2s;
    transition: ease 0.2s;
    font-weight:normal;
}
.noticeContents > dl >  a:hover {
    color: #555;
}







`
export default NoticeWrapper;
