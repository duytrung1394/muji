import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";

const privateWorkIds = [
  "HEMMING",
  "HEIGHT",
  "WIDE",
  "ATTACH_HEIGHT",
  "OPERATE",
  "HANG",
  "COLOR",
  "PILE_LENGTH",
  "FORM",
  "RUG_WIDTH",
  "RUG_LENGTH"
];

const StyledPrivateWork = styled.div`
  &&& {
    margin-bottom: 5px;
  }
`;

const WorkDivision = styled.div`
  &&& {
    margin-bottom: 0px;
    font-size: 11px;
  }
`;

const Work = styled.div`
  &&& {
    margin-bottom: 0px;
    font-size: 11px;
  }
`;

const PrivateWork = ({ id, works }) => {
  if (works) {
    return (
      <StyledPrivateWork>
        <WorkDivision>
          <IntlMessages id={`order.procedure.privateWorkDivision.${id}`} />
        </WorkDivision>
        {works.map((work, index) => <Work key={index}>{work}</Work>)}
      </StyledPrivateWork>
    );
  } else {
    return null;
  }
};

const PrivateWorkList = ({ privateWorkItems = {} }) => {
  return privateWorkIds.map((id, index) => {
    return <PrivateWork key={index} id={id} works={privateWorkItems[id]} />;
  });
};

export default PrivateWorkList;
