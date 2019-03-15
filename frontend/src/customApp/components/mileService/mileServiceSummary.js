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
  background: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
  font-size: 12px;
`;
const LayoutMileSummary = styled.div`
  margin-bottom: 20px;
`;
const LayoutList = styled.ul`
  border-top: 1px solid #999;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
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
`;
const Title = styled.h1`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const CurrentYear = ({ entity }) => {
  const { old_mile, nextGiftMile, nextGiftPoint } = entity;
  return (
    <LayoutMileSummary>
      <Paragraph>
        <IntlMessages id="mileService.mileSummary.milesOfCurrentYear" />
        {old_mile && displayNumberWithCommas(old_mile.mile)}
        <IntlMessages id="mileService.mileSummary.mile" />
      </Paragraph>
      <Paragraph>
        <IntlMessages
          id="mileService.mileSummary.pointsInPoints"
          values={{
            mile: displayNumberWithCommas(nextGiftMile),
            point: displayNumberWithCommas(nextGiftPoint)
          }}
        />
      </Paragraph>
    </LayoutMileSummary>
  );
};

const SavingTime = ({ entity, formated }) => {
  const { nearPointExpireAmount } = entity;
  return (
    <LayoutList>
      <ListItem>
        <IntlMessages id="mileService.mileSummary.savingTime" />
        <IntlMessages id="mileService.mileList.point.duration" />
      </ListItem>
      <ListItemRed>
        <IntlMessages
          id="mileService.mileSummary.expiredMiles"
          values={{
            year: nearPointExpireAmount,
            period: formated
          }}
        />
      </ListItemRed>
    </LayoutList>
  );
};

const SavingMile = ({ entity }) => {
  const { totalMile, stageName, nextStageMile } = entity;
  return (
    <LayoutMileStage>
      <Paragraph>
        <IntlMessages
          id="mileService.mileSummary.savingMiles"
          values={{
            totalMile: displayNumberWithCommas(totalMile)
          }}
        />
        <SpanMileStage>{stageName}</SpanMileStage>
      </Paragraph>
      <Paragraph>
        <IntlMessages
          id="mileService.mileSummary.pointsInStage"
          values={{
            mile: displayNumberWithCommas(nextStageMile)
          }}
        />
      </Paragraph>
    </LayoutMileStage>
  );
};

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
        <CurrentYear entity={entity} />
        <SavingTime entity={entity} formated={formated} />
        <SavingMile entity={entity} />
      </LayoutSectionSummary>
    </LayoutInfo>
  );
};

export default MileServiceSummary;
