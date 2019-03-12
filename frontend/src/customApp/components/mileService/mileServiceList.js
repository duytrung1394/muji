import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { displayNumberWithCommas } from "../../../helpers/utility";
import moment from "../../util/moment";

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

const MileServiceList = ({ miles, intl }) => {
  const dateFormat = intl.formatMessage({
    id: "mileService.dateFormat.dateAndWeekDay"
  });
  const isValidMileArray = miles && miles.length > 0;
  return (
    <LayoutInfo>
      <LayoutSectionList>
        <Title>
          <IntlMessages id="mileService.mileList.title" />
        </Title>
        <LayoutList>
          {isValidMileArray ? (
            miles.map((mile, index) => {
              const formated =
                mile.mileDate &&
                moment(mile.mileDate, "YYYYMMDDHHmmss").format(dateFormat);
              const isValidMileAmount =
                mile.mileAmount && parseInt(mile.mileAmount) > 0;
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
                    {isValidMileAmount ? (
                      <ListItemDD>
                        {mile.mileTypeName}@{mile.locName}
                      </ListItemDD>
                    ) : (
                      <ListItemDDRed>
                        {mile.mileTypeName}@{mile.locName}
                      </ListItemDDRed>
                    )}
                  </ListItemDL>
                  <ListItemDL>
                    <ListItemDT>
                      <IntlMessages id="mileService.mileList.miles" />
                    </ListItemDT>
                    {isValidMileAmount ? (
                      <ListItemDD>
                        {displayNumberWithCommas(mile.mileAmount)}
                        <IntlMessages id="mileService.mileSummary.mile" />
                      </ListItemDD>
                    ) : (
                      <ListItemDDRed>
                        {displayNumberWithCommas(mile.mileAmount)}
                        <IntlMessages id="mileService.mileSummary.mile" />
                      </ListItemDDRed>
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

export default MileServiceList;
