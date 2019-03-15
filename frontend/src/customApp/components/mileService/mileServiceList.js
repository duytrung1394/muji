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
const Title = styled.h1`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const LayoutInfo = styled.div`
  background: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
  font-size: 12px;
`;
const LayoutList = styled.ul`
  border-top: 1px solid #999;
  list-style: none;
  padding: 0;
`;
const ListItemInList = styled.li`
  padding: 16px;
  border-bottom: 1px solid #999;
`;
const ListItemDL = styled.dl`
  margin: 0;
  margin-top: 5px;
`;
const ListItemDT = styled.dt`
  font-weight: bold;
  display: inline-block;
`;
const ListItemDD = styled.dd`
  display: inline-block;
  margin: 0;
  color: ${props => (props.isValid ? "#585858" : "#7f0019")};
`;

const ListTitle = () => (
  <Title>
    <IntlMessages id="mileService.mileList.title" />
  </Title>
);

const ListItems = ({ miles, intl }) => {
  const dateFormat = intl.formatMessage({
    id: "mileService.dateFormat.dateAndWeekDay"
  });
  return miles.map((mile, index) => {
    const formated =
      mile.mileDate &&
      moment(mile.mileDate, "YYYYMMDDHHmmss").format(dateFormat);
    const isValidMileAmount =
      mile.mileAmount && parseInt(mile.mileAmount, 10) > 0;
    return (
      <ListItemInList key={index}>
        <ListItemDL>
          <ListItemDT>
            <IntlMessages id="mileService.mileList.dateOfUse" />
          </ListItemDT>
          <ListItemDD isValid={true}>{formated}</ListItemDD>
        </ListItemDL>
        <ListItemDL>
          <ListItemDT>
            <IntlMessages id="mileService.mileList.usage.content" />
          </ListItemDT>
          <ListItemDD isValid={isValidMileAmount}>
            {mile.mileTypeName}@{mile.locName}
          </ListItemDD>
        </ListItemDL>
        <ListItemDL>
          <ListItemDT>
            <IntlMessages id="mileService.mileList.miles" />
          </ListItemDT>
          <ListItemDD isValid={isValidMileAmount}>
            {displayNumberWithCommas(mile.mileAmount)}
            <IntlMessages id="mileService.mileSummary.mile" />
          </ListItemDD>
        </ListItemDL>
      </ListItemInList>
    );
  });
};

const NoHistory = () => (
  <ListItemInList>
    <IntlMessages id="mileService.mileList.noHistory" />
  </ListItemInList>
);

const MileServiceList = ({ miles, intl }) => {
  const isValidMileArray = miles && miles.length > 0;
  return (
    <LayoutInfo>
      <LayoutSectionList>
        <ListTitle />
        <LayoutList>
          {isValidMileArray ? (
            <ListItems miles={miles} intl={intl} />
          ) : (
            <NoHistory />
          )}
        </LayoutList>
      </LayoutSectionList>
    </LayoutInfo>
  );
};

export default MileServiceList;
