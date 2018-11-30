import React,{Fragment} from "react";
import styled from "styled-components";
import { Rate } from 'antd';
import PostForm from "./postForm";

const StarWrapper = styled.div`

`;

const ReviewTitle = styled.h2`
    text-align:left;
    color: #191919;
    font-weight: 600;
    padding-bottom: 20px;
    font-size: 18px;
`;

const Star = styled(Rate)`
    &.ant-rate{
        font-size:50px;
        color:#ff6600;
    }
`;

const PostReview =()=>{
    return(
        <Fragment>
            <ReviewTitle>レビューを入力</ReviewTitle>
            <StarWrapper>
                <Star />
            </StarWrapper>
            <PostForm/>
        </Fragment>
    );
}

export default PostReview;