import React,{Component, Fragment} from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { Icon } from "antd";

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

const StoreLists = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListCol = styled.div`
    width: 48%;
    border-bottom: 1px solid #585858;
    margin: 0 auto;
    &:nth-child(2){
        border-top: 1px solid #585858;
    }
    &:first-child{
        border-top: 1px solid #585858;
    }
    &:last-child{
        margin-left: 13.797;
    }
`;

const PrefecturalDiv = styled.div`
    padding: 8px 0;
`;

const PrefecturalTitle = styled.h1`
    font-size: 15px;
    padding: 8px 0;
`;

const StoreListSwitch = styled.input`
    display: none;
`;

const ToggleIcon = styled(Icon)`
    font-size: 10px;
    position: absolute;
    right: 0.5em;
    top: 30%;
`;


const StoreList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    padding-bottom: 12px;
`;

const Store = styled.li`
    max-height: 0;
    transition: all 0.5s;
    &:nth-child(even){
        background-color: #f2f2f2;
    }
`;

const StoreLink = styled.a`
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #585858;
    line-height: 1;
    font-size: 12px;

    &:hover{
        color: #585858;
    }
`;


const StoreDetailData = styled.span`
    display: inline-block;
    width: 50%;
`;

const Default = {
    maxHeight: "0",
    overflowY: "hidden",
    transition: "all 0.5s",
}

const Active = {
    maxHeight: "46px",
}

const LabelDefault = {
    padding: "12px 12px 0px",
    fontSize: "12px",
    display: "block",
	position: "relative",
	margin: "0 0 2px 0",
	lineHeight: "1",
    cursor: "pointer",
}

const LabelActive = {
    ...LabelDefault,
    paddingBottom: "12px"
}

class TestList extends Component{
    constructor(props){
        super(props)
        this.state ={
            listFlg: false,
        }
    }

    handleClick = ()=>{
        this.setState({
            listFlg: !this.state.listFlg,

        })
    }


    //データをmapしたもののindexをkeyにしてfalseをvalueにしたいです。

    // settingState(number) {
    //     const flg = Object.assign([], this.state.listFlg);
    //     flg.push({ number : false });
    //     this.setState({ flg });
    // }

        render(){
            return (
                <PrefecturalDiv>
                    <PrefecturalTitle>
                        <IntlMessages id="productDetail.searchByPrefectural"/>
                    </PrefecturalTitle>
                        <StoreLists>
                        {data.map((store,index)=>{
                          return(
                            <ListCol key={index}>
                                    <label
                                      htmlFor="cp_menu_bar1"
                                      onClick={()=>this.handleClick(index)}
                                      style={this.state.listFlg ? LabelActive : LabelDefault }
                                      >
                                        {store.area}
                                        <ToggleIcon type={this.state.listFlg ? "up" : "down"} />
                                    </label>
                                    <StoreListSwitch type="radio" name="radio" id="cp_menu_bar1" class="accordion" />
                                    <StoreList>
                                    { store.list_data.map((s, num)=>{
                                    return(
                                        <Store style={this.state.listFlg ? Active : Default } key={num}>
                                            <StoreLink>
                                                <StoreDetailData>{s.name}</StoreDetailData>
                                                <StoreDetailData>{s.stock}</StoreDetailData>
                                            </StoreLink>
                                        </Store>
                                        )
                                    })}
                                    </StoreList>
                            </ListCol>
                            )
                        })}
                        </StoreLists>
                </PrefecturalDiv>
             );
        }
    }



export default TestList;
