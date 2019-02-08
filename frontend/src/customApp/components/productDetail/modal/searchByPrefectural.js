import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { Select } from "antd";

const data = [
    {
    area:"東京23区内",
    list_data:[
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"わずか"
        },
    ],
},
{
    area:"東京23区外",
    list_data:[
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
    ],
},
{
    area:"千葉県",
    list_data:[
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
    ],
},
{
    area:"神奈川県",
    list_data:[
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
        {
            name:"新宿",
            stock:"あり"
        },
    ]
}
]

const Option = Select.Option;

const AreaSelect = styled(Select)`
    width: 50%;
`;

const AreaOption = styled(Option)`

`;

const PrefecturalDiv = styled.div`
    padding: 8px 0;
`;

const PrefecturalTitle = styled.h1`
    font-size: 15px;
    padding: 8px 0;
`;

const SearchByPrefectural = ()=>{
    return (
        <PrefecturalDiv>
            <PrefecturalTitle>
                <IntlMessages id="productDetail.searchByPrefectural"/>
            </PrefecturalTitle>
            { data.map((store,index)=>{
                console.log(store)
                return(
                <AreaSelect
                    defaultValue={store.area}
                    key={index}
                    >
                {store.list_data.map((item,num)=>{
                    return(
                        <AreaOption
                            value={value}
                            key={num}>
                        </AreaOption>
                  )
                })}
            </AreaSelect>
            )})}
        </PrefecturalDiv>
     );
}


export default SearchByPrefectural;
