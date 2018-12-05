import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Icon } from "antd";

const CommentTitle = styled.div`
    font-weight: bold;
    color: #333;
`;

const CommentsArea = styled.div`
    padding: 10px 0 20px;
    text-align: center;
    margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
    max-width: 650px;
    width: 90%;
    height: 70px;
    background-color: #f7f7f7;
    over-flow: scroll;
    border:none;
    resize: none;
    padding: 10px;
    .ant-input{
        &:focus{
            border-color: #fff;
        }
    }
`;

const PostComment = styled.div`
    position: relative;
`;

const PostButton = styled.button`
    font-size:36px;
    position:absolute;
    top:0;
    right: 5px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    color: #d8d8d8;
`;

const Comment =()=>{
    return(
        <div>
            <CommentTitle>
                <IntlMessages id="reviewDetail.comment" />
            </CommentTitle>
            <CommentsArea>
                <IntlMessages id="reviewDetail.nothingComment" />
            </CommentsArea>
            <PostComment>
                <StyledTextArea placeholder="コメントする" />
                <PostButton>
                    <Icon type="mail" />
                </PostButton>
            </PostComment>
        </div>
    )
}

export default Comment;