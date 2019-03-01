import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../../../customApp/components/shared/form/button";
import DeleteLink from "./deleteLink";
import { Icon } from "antd";

const defaultAddressSize = 3;

const Content = styled.div`
  padding: 16px;
  background: rgb(242, 242, 242);
`;

const BaseContent = styled.div`
  padding: 16px;
  color: rgb(88, 88, 88);
  background: #fff;
  box-shadow: rgba(153, 153, 153, 0.5) 0px 1px 3px 1px;
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
  border-bottom: ${props => (props.isLast ? "1px solid #666" : "none")};
  padding: 16px;
  list-style: none;
`;

const Name = styled.h2`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ZipCode = styled.p`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Address1 = styled.span`
  font-size: 11px;
`;

const Address2 = styled.p`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Tel = styled.p`
  font-size: 11px;
  margin-bottom: 0;
`;

const Note = styled.p`
  font-size: 11px;
  margin-bottom: 0;
  margin-top: 10px;
`;

const ChangeButton = styled(OutlineButton)`
  &&& {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 97px;
    height: 38px;
    border-color: rgb(153, 153, 153);
    border-radius: 20px;
    box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px;
    padding: 10px;
  }
  &.ant-btn-two-chinese-chars > *:not(.anticon) {
    letter-spacing: normal;
  }
`;

const SeeMoreLink = styled.button`
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
                  <Address
                    isLast={
                      (this.state.isSeeMore
                        ? entities.length
                        : defaultAddressSize) -
                        1 ==
                      index
                    }
                  >
                    <li>
                      {index != 0 ? <DeleteLink /> : null}
                      <Name>
                        {item.naming}
                        <IntlMessages id="delivery.addressItem.esq" />
                      </Name>
                      <ZipCode>
                        <IntlMessages id="delivery.addressItem.postalSign" />
                        {item.zipCode}
                      </ZipCode>
                      <Address1>{item.address1}</Address1>
                      <Address1>{item.address2}</Address1>
                      <Address1>{item.address3}</Address1>
                      <Address2>{item.address4}</Address2>

                      <Tel>
                        <IntlMessages id="delivery.addressItem.tel" />
                        {item.telNo}
                      </Tel>
                      {index == 0 ? (
                        <Note>
                          <IntlMessages id="delivery.addressItem.note" />
                        </Note>
                      ) : null}
                      <ChangeButton>
                        <IntlMessages id="delivery.addressItem.change" />
                      </ChangeButton>
                    </li>
                  </Address>
                </StyledLi>
              );
            })}
          </AddressBox>
          <SeeMoreLink onClick={this.seeMore}>
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
          </SeeMoreLink>
        </BaseContent>
      </Content>
    );
  }
}

export default AddressItem;
