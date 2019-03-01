import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Button from "./button";
import DeleteLink from "./deleteLink";
import { Icon } from "antd";

const Content = styled.div`
  padding: 16px;
  background: rgb(242, 242, 242);
`;

const BaseContent = styled.div`
  padding: 16px;
  color: rgb(88, 88, 88);
  background: #fff;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

const AddressBox = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const StyledLi = styled.li`
  padding-left: 0;
  position: relative;
  :nth-child(n + 4) {
    display: ${props => (props.seeMore ? "block" : "none")};
  }
`;

const Address = styled.ul`
  border-top: 1px solid #666;
  padding: 16px;
  list-style: none;
`;

const Name = styled.li`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ZipCode = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Address1 = styled.li`
  font-size: 11px;
`;

const Address2 = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Tel = styled.li`
  font-size: 11px;
`;

const Note = styled.li`
  font-size: 11px;
`;

const ChangeButton = styled(Button)`
  width: 97px;
  height: 38px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const SeeMore = styled.div`
  border-top: 1px solid #666;
`;

const SeeMoreButton = styled.button`
  display: block;
  height: 18px;
  line-height: 18px;
  margin-top: 10px;
  background-color: transparent;
  color: rgb(96, 179, 250);
  font-size: 12px;
  cursor: pointer;
  border-style: none;
`;

const StyledIcon = styled(Icon)`
  margin-left: 10px;
`;

class AddressItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeeMore: false
    };
  }

  seeMore = () => {
    this.setState({ isSeeMore: !this.state.isSeeMore });
  };

  render() {
    const { entities } = this.props;
    return (
      <Content>
        <BaseContent>
          <Title>
            <IntlMessages id="delivery.addressItem.title" />
          </Title>
          <AddressBox>
            {entities.map((item, index) => {
              return (
                <StyledLi key={index} seeMore={this.state.isSeeMore}>
                  <Address>
                    {index != 0 ? <DeleteLink /> : null}
                    <Name>
                      {item.name}
                      <IntlMessages id="delivery.addressItem.esq" />
                    </Name>
                    <ZipCode>
                      <IntlMessages id="delivery.addressItem.postalSign" />
                      {item.zipCode}
                    </ZipCode>
                    <Address1>{item.address1}</Address1>
                    <Address2>{item.address2}</Address2>
                    <Tel>
                      <IntlMessages id="delivery.addressItem.tel" />
                      {item.tel}
                    </Tel>
                    {index == 0 ? (
                      <Note>
                        <IntlMessages id="delivery.addressItem.note" />
                      </Note>
                    ) : null}
                    <ChangeButton>
                      <IntlMessages id="delivery.addressItem.change" />
                    </ChangeButton>
                  </Address>
                </StyledLi>
              );
            })}
          </AddressBox>
          <SeeMore>
            <SeeMoreButton onClick={this.seeMore}>
              {this.state.isSeeMore ? (
                <Fragment>
                  <IntlMessages id="delivery.addressItem.close" />
                  <StyledIcon type="up" />
                </Fragment>
              ) : (
                <Fragment>
                  <IntlMessages id="delivery.addressItem.seeMore" />
                  <StyledIcon type="down" />
                </Fragment>
              )}
            </SeeMoreButton>
          </SeeMore>
        </BaseContent>
      </Content>
    );
  }
}

export default AddressItem;
