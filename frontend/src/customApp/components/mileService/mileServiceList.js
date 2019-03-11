import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  formatWithWeekDayName,
  displayNumberWithCommas
} from "../../../helpers/utility";

const LayoutSectionList = styled.div`
  padding: 16px;
  font-size: 13px;
  background: #fff;
  box-shadow: 0 1px 3px 1px rgba(153, 153, 153, 0.5);
`;
const LayoutInfo = styled.div`
  margin: 0;
  border: 0;
  outline: 0;
  font: inherit;
  display: block;
  background: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
  font-size: 12px;
`;
const LayoutList = styled.ul`
  border-top: 1px solid #999;
  margin: 0;
  padding: 0;
`;
const ListItemInList = styled.li`
  list-style: none;
  padding: 16px;
  border-bottom: 1px solid #999;
`;
const ListItemDL = styled.dl`
  display: block;
  margin: 0;
  padding: 0;
  margin-top: 5px;
`;
const ListItemDT = styled.dt`
  font-weight: bold;
  display: inline-block;
  margin: 0;
  padding: 0;
`;
const ListItemDD = styled.dd`
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #585858;
`;
const ListItemDDRed = styled.dd`
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #7f0019;
`;
const Title = styled.h1`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const HistoryInfoList = props => {
  const { miles } = props;

  return (
    <LayoutInfo>
      <LayoutSectionList>
        <Title>
          <IntlMessages id="mileService.mileList.title" />
        </Title>
        <LayoutList>
          {miles && miles.length > 0 ? (
            miles.map((mile, index) => {
              const formated =
                mile.mileDate && formatWithWeekDayName(mile.mileDate);
              return (
                <ListItemInList key={index}>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.dateOfUse" />
                    </ListItemDT>
                    <ListItemDD>{formated}</ListItemDD>
                  </ListItemDL>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.usage.content" />
                    </ListItemDT>
                    {mile.mileAmount && parseInt(mile.mileAmount) < 0 ? (
                      <ListItemDDRed>
                        {mile.mileTypeName}@{mile.locName}
                      </ListItemDDRed>
                    ) : (
                      <ListItemDD>
                        {mile.mileTypeName}@{mile.locName}
                      </ListItemDD>
                    )}
                  </ListItemDL>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.miles" />
                    </ListItemDT>
                    {mile.mileAmount && parseInt(mile.mileAmount) < 0 ? (
                      <ListItemDDRed>
                        {displayNumberWithCommas(mile.mileAmount)}
                        <IntlMessages id="mileService.mileSummary.mile" />
                      </ListItemDDRed>
                    ) : (
                      <ListItemDD>
                        {displayNumberWithCommas(mile.mileAmount)}
                        <IntlMessages id="mileService.mileSummary.mile" />
                      </ListItemDD>
                    )}
                  </ListItemDL>
                </ListItemInList>
              );
            })
          ) : (
            <ListItemInList>
              <IntlMessages id="mileService.mileList.na" />
            </ListItemInList>
          )}
        </LayoutList>
      </LayoutSectionList>
    </LayoutInfo>
  );
};

export default HistoryInfoList;
