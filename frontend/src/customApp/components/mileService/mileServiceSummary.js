import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { displayNumberWithCommas } from "../../../helpers/utility";
import moment from "../../util/moment";

const LayoutSectionSummary = styled.section`
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 3px 1px rgba(153, 153, 153, 0.5);
`;
const LayoutInfo = styled.div`
  border: 0;
  outline: 0;
  font: inherit;
  display: block;
  background: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
  font-size: 12px;
`;
const LayoutMileSummary = styled.div`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;
const LayoutList = styled.ul`
  border-top: 1px solid #999;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  margin-top: 17px;
  padding: 0 16px;
  &:last-child {
    border-bottom: 1px solid #999;
    margin-top: 10px;
    padding-bottom: 17px;
  }
`;
const ListItemRed = styled.li`
  color: #7f0019;
  list-style: none;
  margin-top: 17px;
  padding: 0 16px;
  &:last-child {
    border-bottom: 1px solid #999;
    margin-top: 10px;
    padding-bottom: 17px;
  }
`;
const LayoutMileStage = styled.dl`
  margin-top: 10px;
`;
const SpanMileStage = styled.span`
  padding-left: 20px;
`;
const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const MileServiceSummary = ({ entity, intl }) => {
  const dateFormat = intl.formatMessage({
    id: "mileService.dateFormat.dateAndTime"
  });
  const formated =
    entity.mileExpireDate &&
    moment(entity.mileExpireDate, "YYYYMMDDHHmmss").format(dateFormat);
  return (
    <LayoutInfo>
      <LayoutSectionSummary>
        <Title>
          <IntlMessages id="mileService.headerSummary.title" />
        </Title>
        <LayoutMileSummary>
          <Paragraph>
            <IntlMessages id="mileService.mileSummary.milesOfCurrentYear" />
            {entity.old_mile && displayNumberWithCommas(entity.old_mile.mile)}
            <IntlMessages id="mileService.mileSummary.mile" />
          </Paragraph>
          <Paragraph>
            <IntlMessages id="mileService.mileSummary.afterThat" />{" "}
            {displayNumberWithCommas(entity.nextGiftMile)}{" "}
            <IntlMessages id="mileService.mileSummary.inMiles" />{" "}
            {displayNumberWithCommas(entity.nextGiftPoint)}{" "}
            <IntlMessages id="mileService.mileSummary.havePoint" />
          </Paragraph>
        </LayoutMileSummary>
        <LayoutList>
          <ListItem>
            <IntlMessages id="mileService.mileSummary.savingTime" />
            <IntlMessages id="mileService.mileList.point.duration" />
          </ListItem>
          <ListItemRed>
            ※{entity.nearPointExpireAmount}
            <IntlMessages id="mileService.mileSummary.mileOfTheYear" />
            {formated}
            <IntlMessages id="mileService.mileSummary.expiredAt" />
          </ListItemRed>
        </LayoutList>
        <LayoutMileStage>
          <Paragraph>
            <IntlMessages id="mileService.mileSummary.savingMiles" />
            {displayNumberWithCommas(entity.totalMile)}{" "}
            <IntlMessages id="mileService.mileSummary.mile" />
            <SpanMileStage>{entity.stageName}</SpanMileStage>
          </Paragraph>
          <Paragraph>
            <IntlMessages id="mileService.mileSummary.afterThat" />{" "}
            {displayNumberWithCommas(entity.nextStageMile)}{" "}
            <IntlMessages id="mileService.mileSummary.other" />
          </Paragraph>
        </LayoutMileStage>
      </LayoutSectionSummary>
    </LayoutInfo>
  );
};

export default MileServiceSummary;
