import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { formatWithWeekDayName } from "../../../helpers/utility";

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
`;
const Header1 = styled.h1`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const HistoryInfoList = props => {
  const { mile_history } = props;

  return (
    <LayoutInfo>
      <LayoutSectionList>
        <Header1>
          <IntlMessages id="mileService.mileList.title" />
        </Header1>
        <LayoutList>
          {mile_history && mile_history.length > 0 ? (
            mile_history.map((value, index) => {
              const formated =
                value.mileDate && formatWithWeekDayName(value.mileDate);
              const redColor =
                value.mileAmount && parseInt(value.mileAmount) < 0
                  ? "#7f0019"
                  : "#585858";
              return (
                <ListItemInList key={index}>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.dateOfUse" />
                    </ListItemDT>
                    <ListItemDD>{formated}</ListItemDD>
                  </ListItemDL>
                  <ListItemDL>
                    <ListItemDT className="history-info--return">
                      <IntlMessages id="mileService.mileList.usage.content" />
                    </ListItemDT>
                    <ListItemDD style={{ color: redColor }}>
                      {value.mileTypeName}@{value.locName}
                    </ListItemDD>
                  </ListItemDL>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.miles" />
                    </ListItemDT>
                    <ListItemDD style={{ color: redColor }}>
                      {value.mileAmount}
                      <IntlMessages id="mileService.mileSummary.mile" />
                    </ListItemDD>
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
