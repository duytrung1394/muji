import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";
import styled from "styled-components";
import SearchItemImageList from "../search/searchItemImageList";


const SearchItem = props => {
    return (
                <SearchItemImageList items={props.searchItems} />
    );
};

export default SearchItem;
