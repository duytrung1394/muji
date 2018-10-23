import React from "react";
import {Card,Col,Row} from "antd";
import {Link} from "react-router-dom";
import { PopularityRankingWrapper,
				 PopularityRankingTitle,
			 	 Badge,
				 PopularityRankingMeta } from './popularityRanking.style';

const badgeColor = (index)=>{
    if(index===1){
        return "#ffc107"
    }
    else if(index===2){
        return "#b4b4b4"
    }
    else if(index===3){
        return "#9a5b00"
    }
      
  };

const badgeNumberColor = (index)=>{
    if(index===1 || index===2 || index===3){
        return "#fff"
    }
}

const PopularityRanking = props=> {
	const { popularityRanking } = props;
	return (
		popularityRanking ? (
		<PopularityRankingWrapper>
			<PopularityRankingTitle>人気ランキング</PopularityRankingTitle>
			<Row type="flex" justify="center" align="top">
				{popularityRanking && popularityRanking.map((ranking, index) => {  
					return(
						<Col key={index} span={4}>
							<Link to="">
								<Card cover={<img src= {ranking.img}/>}>
									<Badge 
									backgroundColor={badgeColor(index+1)}			 
									color={badgeNumberColor(index+1)} 
									>
									{index+1}
									</Badge>               
									<PopularityRankingMeta title={ranking.title}/>
								</Card>
							</Link>
						</Col> 
						);
					})
				}
			</Row>
		</PopularityRankingWrapper> 
		):
		(null)
	)
}


export default PopularityRanking;